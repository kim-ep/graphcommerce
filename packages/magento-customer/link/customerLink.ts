import { UrlObject } from 'url'
import { globalApolloClient } from '@graphcommerce/graphql'
import { ApolloLink, fromPromise, onError, setContext } from '@graphcommerce/graphql/apollo'
import { ErrorCategory } from '@graphcommerce/magento-graphql'
import { GraphQLError } from 'graphql'
import { NextRouter } from 'next/router'
import { CustomerTokenDocument } from '../hooks'

export type PushRouter = Pick<NextRouter, 'push' | 'events'>

async function pushWithPromise(
  router: Pick<NextRouter, 'push' | 'events'>,
  url: UrlObject | string,
) {
  await router.push(url)
  return new Promise<boolean>((resolve) => {
    function navigatedAwayFromTarget(incoming: string) {
      if (incoming === url) return
      router.events.off('routeChangeComplete', navigatedAwayFromTarget)
      resolve(true)
    }
    function navigatedToTarget(incoming: string) {
      if (incoming === url) {
        // We are at the destination
        router.events.off('routeChangeComplete', navigatedToTarget)
        router.events.on('routeChangeComplete', navigatedAwayFromTarget)
      }
    }
    router.events.on('routeChangeComplete', navigatedToTarget)
  })
}

function isErrorCategory(err: GraphQLError, category: ErrorCategory) {
  return err.extensions?.category === category
}

const addTokenHeader = setContext((_, context) => {
  if (!context.headers) context.headers = {}

  try {
    const query = context.cache.readQuery({ query: CustomerTokenDocument })

    if (query?.customerToken?.token) {
      context.headers.authorization = `Bearer ${query?.customerToken?.token}`
      return context
    }
    return context
  } catch (error) {
    return context
  }
})

const customerErrorLink = (router: PushRouter) =>
  onError((context) => {
    const { graphQLErrors, operation, forward } = context
    const client = globalApolloClient.current
    if (!client) return undefined

    const oldHeaders = operation.getContext().headers
    // const email = client.cache.readQuery({ query: UseCustomerValidateTokenDocument })?.customer
    //   ?.email
    const authError = graphQLErrors?.find((err) => isErrorCategory(err, 'graphql-authorization'))

    /** If the error we're dealing with is not an authorization error, we're done. */
    if (!authError) return undefined

    if (!oldHeaders.authorization) {
      console.error(
        'No authorization header found in request, but an authorization error was returned, this is a bug. This is the operation:',
        operation,
      )
      return undefined
    }

    const currentToken = client.cache.readQuery({ query: CustomerTokenDocument })?.customerToken
    if (!currentToken) throw Error('bug')
    client.writeQuery({
      query: CustomerTokenDocument,
      data: { customerToken: { ...currentToken, valid: false } },
    })

    // After submission of the signIn form, navigate back to the current route.
    // Resolve the promomise.
    // Dependending on the result, either retry the request or clean up the cache.

    const signInAgainPromise = pushWithPromise(router, '/account/signin')

    return fromPromise(signInAgainPromise).flatMap(() => {
      const tokenQuery = client.cache.readQuery({ query: CustomerTokenDocument })
      operation.setContext({
        headers: {
          ...oldHeaders,
          authorization: `Bearer ${tokenQuery?.customerToken?.token}`,
        },
      })

      // retry the request, returning the new observable
      return forward(operation)
    })
  })

export const customerLink = (router: PushRouter) =>
  ApolloLink.from([addTokenHeader, customerErrorLink(router)])
