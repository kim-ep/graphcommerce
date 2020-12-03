// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const AddConfigurableProductToCartDocument: DocumentNode<
  AddConfigurableProductToCartMutation,
  AddConfigurableProductToCartMutationVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddConfigurableProductToCart' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'cartId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'variantSku' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'parentSku' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'quantity' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Float' } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'customizableOptions' } },
          type: {
            kind: 'ListType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'CustomizableOptionInput' } },
          },
          defaultValue: { kind: 'ListValue', values: [] },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addConfigurableProductsToCart' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'cart_id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'cartId' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'cart_items' },
                      value: {
                        kind: 'ListValue',
                        values: [
                          {
                            kind: 'ObjectValue',
                            fields: [
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'data' },
                                value: {
                                  kind: 'ObjectValue',
                                  fields: [
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'quantity' },
                                      value: {
                                        kind: 'Variable',
                                        name: { kind: 'Name', value: 'quantity' },
                                      },
                                    },
                                    {
                                      kind: 'ObjectField',
                                      name: { kind: 'Name', value: 'sku' },
                                      value: {
                                        kind: 'Variable',
                                        name: { kind: 'Name', value: 'variantSku' },
                                      },
                                    },
                                  ],
                                },
                              },
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'customizable_options' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'customizableOptions' },
                                },
                              },
                              {
                                kind: 'ObjectField',
                                name: { kind: 'Name', value: 'parent_sku' },
                                value: {
                                  kind: 'Variable',
                                  name: { kind: 'Name', value: 'parentSku' },
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cart' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'prices' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'applied_taxes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'amount' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'currency' },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                      ],
                                    },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'discounts' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'amount' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'currency' },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                      ],
                                    },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'grand_total' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'subtotal_excluding_tax' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'subtotal_including_tax' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'subtotal_with_discount_excluding_tax' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shipping_addresses' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'selected_shipping_method' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'carrier_title' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'method_title' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'amount' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'currency' },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'total_quantity' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'product' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'url_key' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'thumbnail' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'prices' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'discounts' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'amount' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'currency' },
                                              },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'value' },
                                              },
                                            ],
                                          },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'price' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'currency' },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'row_total' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'currency' },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'row_total_including_tax' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'currency' },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'total_item_discount' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'currency' },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'ConfigurableCartItem' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'configurable_options' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'option_label' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'value_id' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'value_label' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'DownloadableCartItem' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'samples' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sample_url' },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'BundleCartItem' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'bundle_options' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'values' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'id' },
                                              },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'label' },
                                              },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'price' },
                                              },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'quantity' },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'is_virtual' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
}
export type AddConfigurableProductToCartMutationVariables = Types.Exact<{
  cartId: Types.Scalars['String']
  variantSku: Types.Scalars['String']
  parentSku: Types.Scalars['String']
  quantity?: Types.Maybe<Types.Scalars['Float']>
  customizableOptions?: Types.Maybe<Array<Types.Maybe<Types.CustomizableOptionInput>>>
}>

export type AddConfigurableProductToCartMutation = {
  addConfigurableProductsToCart?: Types.Maybe<{
    cart: { __typename: 'Cart' } & Pick<
      Types.Cart,
      'id' | 'email' | 'total_quantity' | 'is_virtual'
    > & {
        prices?: Types.Maybe<{
          applied_taxes?: Types.Maybe<
            Array<
              Types.Maybe<
                Pick<Types.CartTaxItem, 'label'> & {
                  amount: Pick<Types.Money, 'currency' | 'value'>
                }
              >
            >
          >
          discounts?: Types.Maybe<
            Array<
              Types.Maybe<
                Pick<Types.Discount, 'label'> & { amount: Pick<Types.Money, 'currency' | 'value'> }
              >
            >
          >
          grand_total?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
          subtotal_excluding_tax?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
          subtotal_including_tax?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
          subtotal_with_discount_excluding_tax?: Types.Maybe<
            Pick<Types.Money, 'currency' | 'value'>
          >
        }>
        shipping_addresses: Array<
          Types.Maybe<{
            selected_shipping_method?: Types.Maybe<
              Pick<Types.SelectedShippingMethod, 'carrier_title' | 'method_title'> & {
                amount: Pick<Types.Money, 'currency' | 'value'>
              }
            >
          }>
        >
        items?: Types.Maybe<
          Array<
            Types.Maybe<
              | ({ __typename: 'SimpleCartItem' } & Pick<
                  Types.SimpleCartItem,
                  'id' | 'quantity'
                > & {
                    product:
                      | (Pick<Types.VirtualProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.SimpleProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.DownloadableProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.BundleProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.GroupedProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.ConfigurableProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                    prices?: Types.Maybe<{
                      discounts?: Types.Maybe<
                        Array<
                          Types.Maybe<
                            Pick<Types.Discount, 'label'> & {
                              amount: Pick<Types.Money, 'currency' | 'value'>
                            }
                          >
                        >
                      >
                      price: Pick<Types.Money, 'currency' | 'value'>
                      row_total: Pick<Types.Money, 'currency' | 'value'>
                      row_total_including_tax: Pick<Types.Money, 'currency' | 'value'>
                      total_item_discount?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
                    }>
                  })
              | ({ __typename: 'VirtualCartItem' } & Pick<
                  Types.VirtualCartItem,
                  'id' | 'quantity'
                > & {
                    product:
                      | (Pick<Types.VirtualProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.SimpleProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.DownloadableProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.BundleProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.GroupedProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.ConfigurableProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                    prices?: Types.Maybe<{
                      discounts?: Types.Maybe<
                        Array<
                          Types.Maybe<
                            Pick<Types.Discount, 'label'> & {
                              amount: Pick<Types.Money, 'currency' | 'value'>
                            }
                          >
                        >
                      >
                      price: Pick<Types.Money, 'currency' | 'value'>
                      row_total: Pick<Types.Money, 'currency' | 'value'>
                      row_total_including_tax: Pick<Types.Money, 'currency' | 'value'>
                      total_item_discount?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
                    }>
                  })
              | ({ __typename: 'DownloadableCartItem' } & Pick<
                  Types.DownloadableCartItem,
                  'id' | 'quantity'
                > & {
                    samples?: Types.Maybe<
                      Array<
                        Types.Maybe<Pick<Types.DownloadableProductSamples, 'sample_url' | 'title'>>
                      >
                    >
                    product:
                      | (Pick<Types.VirtualProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.SimpleProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.DownloadableProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.BundleProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.GroupedProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.ConfigurableProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                    prices?: Types.Maybe<{
                      discounts?: Types.Maybe<
                        Array<
                          Types.Maybe<
                            Pick<Types.Discount, 'label'> & {
                              amount: Pick<Types.Money, 'currency' | 'value'>
                            }
                          >
                        >
                      >
                      price: Pick<Types.Money, 'currency' | 'value'>
                      row_total: Pick<Types.Money, 'currency' | 'value'>
                      row_total_including_tax: Pick<Types.Money, 'currency' | 'value'>
                      total_item_discount?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
                    }>
                  })
              | ({ __typename: 'BundleCartItem' } & Pick<
                  Types.BundleCartItem,
                  'id' | 'quantity'
                > & {
                    bundle_options: Array<
                      Types.Maybe<
                        Pick<Types.SelectedBundleOption, 'id' | 'label' | 'type'> & {
                          values: Array<
                            Types.Maybe<
                              Pick<
                                Types.SelectedBundleOptionValue,
                                'id' | 'label' | 'price' | 'quantity'
                              >
                            >
                          >
                        }
                      >
                    >
                    product:
                      | (Pick<Types.VirtualProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.SimpleProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.DownloadableProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.BundleProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.GroupedProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.ConfigurableProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                    prices?: Types.Maybe<{
                      discounts?: Types.Maybe<
                        Array<
                          Types.Maybe<
                            Pick<Types.Discount, 'label'> & {
                              amount: Pick<Types.Money, 'currency' | 'value'>
                            }
                          >
                        >
                      >
                      price: Pick<Types.Money, 'currency' | 'value'>
                      row_total: Pick<Types.Money, 'currency' | 'value'>
                      row_total_including_tax: Pick<Types.Money, 'currency' | 'value'>
                      total_item_discount?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
                    }>
                  })
              | ({ __typename: 'ConfigurableCartItem' } & Pick<
                  Types.ConfigurableCartItem,
                  'id' | 'quantity'
                > & {
                    configurable_options: Array<
                      Types.Maybe<
                        Pick<
                          Types.SelectedConfigurableOption,
                          'id' | 'option_label' | 'value_id' | 'value_label'
                        >
                      >
                    >
                    product:
                      | (Pick<Types.VirtualProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.SimpleProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.DownloadableProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.BundleProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.GroupedProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                      | (Pick<Types.ConfigurableProduct, 'name' | 'url_key'> & {
                          thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                        })
                    prices?: Types.Maybe<{
                      discounts?: Types.Maybe<
                        Array<
                          Types.Maybe<
                            Pick<Types.Discount, 'label'> & {
                              amount: Pick<Types.Money, 'currency' | 'value'>
                            }
                          >
                        >
                      >
                      price: Pick<Types.Money, 'currency' | 'value'>
                      row_total: Pick<Types.Money, 'currency' | 'value'>
                      row_total_including_tax: Pick<Types.Money, 'currency' | 'value'>
                      total_item_discount?: Types.Maybe<Pick<Types.Money, 'currency' | 'value'>>
                    }>
                  })
            >
          >
        >
      }
  }>
}
