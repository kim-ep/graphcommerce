import { graphqlErrorByCategory } from '@graphcommerce/magento-graphql'
import { useFormAutoSubmit, useFormGqlQuery } from '@graphcommerce/react-hook-form'
import { useEffect, useState } from 'react'
import { CustomerDocument } from './Customer.gql'
import { IsEmailAvailableDocument } from './IsEmailAvailable.gql'
import { useCustomerQuery } from './useCustomerQuery'
import { useCustomerSession } from './useCustomerSession'

export type UseFormIsEmailAvailableProps = {
  email?: string | null
  onSubmitted?: (data: { email: string }) => void
}

export function useFormIsEmailAvailable(props: UseFormIsEmailAvailableProps) {
  const { email, onSubmitted } = props
  const { loggedIn, requireAuth } = useCustomerSession()
  const customerQuery = useCustomerQuery(CustomerDocument, { fetchPolicy: 'network-only' })

  const form = useFormGqlQuery(
    IsEmailAvailableDocument,
    { mode: 'onChange', defaultValues: { email: email ?? '' } },
    { fetchPolicy: 'cache-and-network' },
  )
  const { formState, data, handleSubmit } = form

  const submit = handleSubmit(onSubmitted || (() => {}))
  const autoSubmitting = useFormAutoSubmit({ form, submit, forceInitialSubmit: !loggedIn })

  const hasAccount = data?.isEmailAvailable?.is_email_available === false

  const { isDirty, isSubmitSuccessful, isSubmitted, isSubmitting, isValid } = formState

  const [mode, setMode] = useState<'email' | 'signin' | 'signup' | 'signedin' | 'session-expired'>(
    loggedIn ? 'signedin' : 'email',
  )

  const [, authError] = graphqlErrorByCategory({
    category: 'graphql-authorization',
    error: customerQuery.error,
  })

  useEffect(() => {
    if (loggedIn) {
      setMode(authError || requireAuth ? 'session-expired' : 'signedin')
      return
    }
    if (isSubmitting) return
    if (!isValid) return
    if (!isDirty && isSubmitted && isSubmitSuccessful && isValid)
      setMode(hasAccount ? 'signin' : 'signup')

    if (customerQuery.data?.customer && requireAuth)
      setMode(isSubmitSuccessful ? 'signin' : 'session-expired')
  }, [
    authError,
    customerQuery.data?.customer,
    hasAccount,
    isDirty,
    isSubmitSuccessful,
    isSubmitted,
    isSubmitting,
    isValid,
    loggedIn,
    requireAuth,
  ])

  return { mode, form, submit, autoSubmitting, hasAccount }
}
