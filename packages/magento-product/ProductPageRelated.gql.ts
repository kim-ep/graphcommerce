// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

import {
  ProductListItem_VirtualProduct_Fragment,
  ProductListItem_SimpleProduct_Fragment,
  ProductListItem_DownloadableProduct_Fragment,
  ProductListItem_GiftCardProduct_Fragment,
  ProductListItem_BundleProduct_Fragment,
  ProductListItem_GroupedProduct_Fragment,
  ProductListItem_ConfigurableProduct_Fragment,
  ProductListItemFragmentDoc,
} from './ProductListItem.gql'

export const ProductPageRelatedFragmentDoc: DocumentNode<ProductPageRelatedFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductPageRelated' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductInterface' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'related_products' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductListItem' } },
              ],
            },
          },
        ],
      },
    },
    ...ProductListItemFragmentDoc.definitions,
  ],
}
export type ProductPageRelated_VirtualProduct_Fragment = {
  related_products?: Types.Maybe<
    Array<
      Types.Maybe<
        | ProductListItem_VirtualProduct_Fragment
        | ProductListItem_SimpleProduct_Fragment
        | ProductListItem_DownloadableProduct_Fragment
        | ProductListItem_GiftCardProduct_Fragment
        | ProductListItem_BundleProduct_Fragment
        | ProductListItem_GroupedProduct_Fragment
        | ProductListItem_ConfigurableProduct_Fragment
      >
    >
  >
}

export type ProductPageRelated_SimpleProduct_Fragment = {
  related_products?: Types.Maybe<
    Array<
      Types.Maybe<
        | ProductListItem_VirtualProduct_Fragment
        | ProductListItem_SimpleProduct_Fragment
        | ProductListItem_DownloadableProduct_Fragment
        | ProductListItem_GiftCardProduct_Fragment
        | ProductListItem_BundleProduct_Fragment
        | ProductListItem_GroupedProduct_Fragment
        | ProductListItem_ConfigurableProduct_Fragment
      >
    >
  >
}

export type ProductPageRelated_DownloadableProduct_Fragment = {
  related_products?: Types.Maybe<
    Array<
      Types.Maybe<
        | ProductListItem_VirtualProduct_Fragment
        | ProductListItem_SimpleProduct_Fragment
        | ProductListItem_DownloadableProduct_Fragment
        | ProductListItem_GiftCardProduct_Fragment
        | ProductListItem_BundleProduct_Fragment
        | ProductListItem_GroupedProduct_Fragment
        | ProductListItem_ConfigurableProduct_Fragment
      >
    >
  >
}

export type ProductPageRelated_GiftCardProduct_Fragment = {
  related_products?: Types.Maybe<
    Array<
      Types.Maybe<
        | ProductListItem_VirtualProduct_Fragment
        | ProductListItem_SimpleProduct_Fragment
        | ProductListItem_DownloadableProduct_Fragment
        | ProductListItem_GiftCardProduct_Fragment
        | ProductListItem_BundleProduct_Fragment
        | ProductListItem_GroupedProduct_Fragment
        | ProductListItem_ConfigurableProduct_Fragment
      >
    >
  >
}

export type ProductPageRelated_BundleProduct_Fragment = {
  related_products?: Types.Maybe<
    Array<
      Types.Maybe<
        | ProductListItem_VirtualProduct_Fragment
        | ProductListItem_SimpleProduct_Fragment
        | ProductListItem_DownloadableProduct_Fragment
        | ProductListItem_GiftCardProduct_Fragment
        | ProductListItem_BundleProduct_Fragment
        | ProductListItem_GroupedProduct_Fragment
        | ProductListItem_ConfigurableProduct_Fragment
      >
    >
  >
}

export type ProductPageRelated_GroupedProduct_Fragment = {
  related_products?: Types.Maybe<
    Array<
      Types.Maybe<
        | ProductListItem_VirtualProduct_Fragment
        | ProductListItem_SimpleProduct_Fragment
        | ProductListItem_DownloadableProduct_Fragment
        | ProductListItem_GiftCardProduct_Fragment
        | ProductListItem_BundleProduct_Fragment
        | ProductListItem_GroupedProduct_Fragment
        | ProductListItem_ConfigurableProduct_Fragment
      >
    >
  >
}

export type ProductPageRelated_ConfigurableProduct_Fragment = {
  related_products?: Types.Maybe<
    Array<
      Types.Maybe<
        | ProductListItem_VirtualProduct_Fragment
        | ProductListItem_SimpleProduct_Fragment
        | ProductListItem_DownloadableProduct_Fragment
        | ProductListItem_GiftCardProduct_Fragment
        | ProductListItem_BundleProduct_Fragment
        | ProductListItem_GroupedProduct_Fragment
        | ProductListItem_ConfigurableProduct_Fragment
      >
    >
  >
}

export type ProductPageRelatedFragment =
  | ProductPageRelated_VirtualProduct_Fragment
  | ProductPageRelated_SimpleProduct_Fragment
  | ProductPageRelated_DownloadableProduct_Fragment
  | ProductPageRelated_GiftCardProduct_Fragment
  | ProductPageRelated_BundleProduct_Fragment
  | ProductPageRelated_GroupedProduct_Fragment
  | ProductPageRelated_ConfigurableProduct_Fragment
