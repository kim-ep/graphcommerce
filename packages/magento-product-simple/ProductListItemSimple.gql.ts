// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const ProductListItemSimpleFragmentDoc: DocumentNode<
  ProductListItemSimpleFragment,
  unknown
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductListItemSimple' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'SimpleProduct' } },
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'sku' }, arguments: [], directives: [] },
        ],
      },
    },
  ],
}
export type ProductListItemSimpleFragment = Pick<Types.SimpleProduct, 'sku'>
