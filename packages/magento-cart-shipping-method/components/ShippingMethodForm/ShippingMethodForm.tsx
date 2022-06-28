import {
  ApolloCartErrorAlert,
  useCartQuery,
  useFormGqlMutationCart,
} from '@graphcommerce/magento-cart'
import { Form, FormHeader } from '@graphcommerce/next-ui'
import {
  ActionCardItemBase,
  ActionCardItemRenderProps,
  ActionCardListForm,
} from '@graphcommerce/next-ui/ActionCard/ActionCardListForm'
import {
  useFormCompose,
  UseFormComposeOptions,
  useFormPersist,
} from '@graphcommerce/react-hook-form'
import { i18n } from '@lingui/core'
import { Trans } from '@lingui/react'
import { FC, useEffect, useMemo } from 'react'
import { GetShippingMethodsDocument } from './GetShippingMethods.gql'
import { ShippingMethodActionCard } from './ShippingMethodActionCard'
import {
  ShippingMethodFormDocument,
  ShippingMethodFormMutation,
  ShippingMethodFormMutationVariables,
} from './ShippingMethodForm.gql'

export type ShippingMethodFormProps = Pick<UseFormComposeOptions, 'step'>

export function ShippingMethodForm(props: ShippingMethodFormProps) {
  const { step } = props
  const { data: cartQuery, loading } = useCartQuery(GetShippingMethodsDocument)
  const currentAddress = cartQuery?.cart?.shipping_addresses?.[0]
  const available = currentAddress?.available_shipping_methods
  const selected = currentAddress?.selected_shipping_method
  const carrier = selected?.carrier_code ?? available?.[0]?.carrier_code
  const method = selected?.method_code ?? available?.[0]?.method_code ?? undefined
  const carrierMethod = `${carrier}-${method}`

  const sortedAvailableShippingMethods = useMemo(
    () =>
      [
        ...(currentAddress?.available_shipping_methods ?? []),
        // eslint-disable-next-line no-nested-ternary
      ].sort((a, b) => (a === b ? 0 : a ? -1 : 1)),
    [currentAddress?.available_shipping_methods],
  )

  const form = useFormGqlMutationCart<
    ShippingMethodFormMutation,
    ShippingMethodFormMutationVariables & { carrierMethod?: string }
  >(ShippingMethodFormDocument, {
    defaultValues: { carrierMethod, carrier, method },
    onBeforeSubmit: (variables) => {
      const splitCarrierMethod = variables?.carrierMethod?.split('-')
      return {
        ...variables,
        carrier: splitCarrierMethod?.[0] ?? available?.[0]?.carrier_code ?? '',
        method: splitCarrierMethod?.[1] ?? available?.[0]?.method_code ?? '',
      }
    },
  })

  const { handleSubmit, control, error, setValue } = form
  const submit = handleSubmit(() => {})

  useFormPersist({ form, name: 'ShippingMethodForm' })
  useFormCompose({ form, step, submit, key: 'ShippingMethodForm' })

  useEffect(() => {
    const availableMethods = sortedAvailableShippingMethods.filter((m) => m?.available)
    if (availableMethods.length === 1) {
      setValue(
        'carrierMethod',
        `${availableMethods[0]?.carrier_code}-${availableMethods[0]?.method_code}`,
      )
    }
  }, [
    carrier,
    method,
    selected?.carrier_code,
    selected?.method_code,
    setValue,
    sortedAvailableShippingMethods,
  ])

  return (
    <>
      {!loading && sortedAvailableShippingMethods.length > 0 && (
        <FormHeader variant='h5' sx={{ marginBottom: 0 }}>
          <Trans id='Shipping method' />
        </FormHeader>
      )}

      <Form onSubmit={submit} noValidate>
        <ActionCardListForm
          control={control}
          name='carrierMethod'
          errorMessage={i18n._(/* i18n */ 'Please select a shipping method')}
          items={sortedAvailableShippingMethods.filter(Boolean).map((sortedMethod) => ({
            ...sortedMethod,
            disabled: !sortedMethod?.available,
            value: `${sortedMethod?.carrier_code}-${sortedMethod?.method_code}`,
          }))}
          render={ShippingMethodActionCard as FC<ActionCardItemRenderProps<ActionCardItemBase>>}
        />
        <ApolloCartErrorAlert error={error} />
      </Form>
    </>
  )
}
