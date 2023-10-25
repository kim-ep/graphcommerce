import { PropertyPicker } from '@graphcommerce/hygraph-app'
import {
  createOptionsFromInterfaceObject,
  objectifyGraphQLInterface,
  fetchGraphQLInterface,
} from '@graphcommerce/hygraph-app/lib'
import { Interface } from '@graphcommerce/hygraph-app/types'
import { StoreConfigDocument } from '@graphcommerce/magento-store'
import { GetStaticProps } from '@graphcommerce/next-ui'
import { Wrapper } from '@hygraph/app-sdk-react'
import { Container } from '@mui/material'
import React from 'react'
import { graphqlSharedClient, graphqlSsrClient } from '../../lib/graphql/graphqlSsrClient'

type PropertyPickerProps = Interface
type GetPageStaticProps = GetStaticProps<PropertyPickerProps>

export default function DRPropertyPicker(props: PropertyPickerProps) {
  const { __type } = props
  const { fields } = __type
  const fieldContainer = React.useRef(null)

  // Todo: this can be optimized in a future version. Instead of running the functions twice we can return an object with both options. For now this is fine.
  const numberOptions = React.useMemo(
    () =>
      createOptionsFromInterfaceObject(
        objectifyGraphQLInterface(fields, 'number', ['ProductInterface']),
      ),
    [fields],
  )

  const textOptions = React.useMemo(
    () =>
      createOptionsFromInterfaceObject(
        objectifyGraphQLInterface(fields, 'text', ['ProductInterface']),
      ),
    [fields],
  )

  // We manually add url to options because it is supported by DynamicRows but is not included in the ProductInterface.
  const options = {
    text: [...textOptions, { label: 'url', id: 'url' }].sort((a, b) => {
      if (!a.label.includes('.') && !b.label.includes('.')) {
        return a.label.localeCompare(b.label)
      }
      if (a.label.includes('.')) {
        return 1
      }
      return -1
    }),
    number: [...numberOptions, { label: 'url', id: 'url' }],
  }

  React.useEffect(() => {
    /**
     * Some styling is being undone here to resolve conflicts between Hygraph App SDK and CssAndFramerMotionProvider.
     */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const frameBox1 = fieldContainer?.current?.parentElement
    frameBox1.style.position = 'static'
    frameBox1.style.minHeight = 'unset'

    const frameBox2 = frameBox1?.previousSibling
    frameBox2.style.minHeight = 'unset'

    const body = frameBox1.parentElement.parentElement
    body.style.background = 'transparent'
    body.style.overflow = 'hidden'
  }, [fieldContainer])

  return (
    <Container ref={fieldContainer} sx={{ px: { xs: '0' } }}>
      <Wrapper>
        <PropertyPicker options={options} />
      </Wrapper>
    </Container>
  )
}

export const getStaticProps: GetPageStaticProps = async ({ locale }) => {
  const staticClient = graphqlSsrClient(locale)
  const client = graphqlSharedClient(locale)
  const conf = client.query({ query: StoreConfigDocument })
  const graphQLInterface = fetchGraphQLInterface(staticClient)

  return {
    props: {
      ...(await graphQLInterface).data,
      apolloState: await conf.then(() => client.cache.extract()),
    },
  }
}
