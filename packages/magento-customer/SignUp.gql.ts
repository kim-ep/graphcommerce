// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const SignUpDocument: DocumentNode<SignUpMutation, SignUpMutationVariables> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignUp' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'prefix' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'firstname' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'middlename' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'lastname' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'suffix' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'taxvat' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'gender' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'isSubscribed' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          defaultValue: { kind: 'BooleanValue', value: false },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'dateOfBirth' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCustomer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'email' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'password' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'prefix' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'prefix' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'firstname' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'firstname' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'middlename' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'middlename' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'lastname' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'lastname' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'suffix' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'suffix' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'taxvat' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'taxvat' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'gender' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'gender' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'is_subscribed' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'isSubscribed' } },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'date_of_birth' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'dateOfBirth' } },
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
                  name: { kind: 'Name', value: 'customer' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'addresses' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'prefix' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'middlename' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'suffix' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'company' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'country_code' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'postcode' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'region' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'region' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'region_code' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'region_id' } },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'street' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'telephone' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'vat_id' } },
                          ],
                        },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'prefix' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'middlename' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'suffix' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'is_subscribed' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'date_of_birth' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'taxvat' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'generateCustomerToken' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'email' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'token' } }],
            },
          },
        ],
      },
    },
  ],
}
export type SignUpMutationVariables = Types.Exact<{
  email: Types.Scalars['String']
  password: Types.Scalars['String']
  prefix: Types.Scalars['String']
  firstname: Types.Scalars['String']
  middlename?: Types.Maybe<Types.Scalars['String']>
  lastname: Types.Scalars['String']
  suffix?: Types.Maybe<Types.Scalars['String']>
  taxvat?: Types.Maybe<Types.Scalars['String']>
  gender?: Types.Maybe<Types.Scalars['Int']>
  isSubscribed?: Types.Maybe<Types.Scalars['Boolean']>
  dateOfBirth?: Types.Maybe<Types.Scalars['String']>
}>

export type SignUpMutation = {
  createCustomer?: Types.Maybe<{
    customer: Pick<
      Types.Customer,
      | 'default_billing'
      | 'default_shipping'
      | 'email'
      | 'prefix'
      | 'firstname'
      | 'middlename'
      | 'lastname'
      | 'suffix'
      | 'gender'
      | 'is_subscribed'
      | 'date_of_birth'
      | 'taxvat'
    > & {
      addresses?: Types.Maybe<
        Array<
          Types.Maybe<
            Pick<
              Types.CustomerAddress,
              | 'prefix'
              | 'firstname'
              | 'middlename'
              | 'lastname'
              | 'suffix'
              | 'city'
              | 'company'
              | 'country_code'
              | 'postcode'
              | 'street'
              | 'telephone'
              | 'vat_id'
            > & {
              region?: Types.Maybe<
                Pick<Types.CustomerAddressRegion, 'region' | 'region_code' | 'region_id'>
              >
            }
          >
        >
      >
    }
  }>
  generateCustomerToken?: Types.Maybe<Pick<Types.CustomerToken, 'token'>>
}
