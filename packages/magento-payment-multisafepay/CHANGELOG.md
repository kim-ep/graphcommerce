# @graphcommerce/magento-payment-multisafepay

## 4.14.0-canary.6

## 4.14.0-canary.5

## 4.14.0-canary.4

### Patch Changes

- [#1733](https://github.com/graphcommerce-org/graphcommerce/pull/1733) [`b2d73c726`](https://github.com/graphcommerce-org/graphcommerce/commit/b2d73c726fa123435fa6c54b4e0fd0db2df7c4ab) - Move to <Prev/> instead of <Component/> to call the plugin component ([@paales](https://github.com/paales))

- [#1733](https://github.com/graphcommerce-org/graphcommerce/pull/1733) [`be10e8cd1`](https://github.com/graphcommerce-org/graphcommerce/commit/be10e8cd1dce172a914ee9e5f65fdca4d0929fc8) - Migrated payment methods to use the new `onSuccess` method from `PaymentMethodContextProvider` instead of redirecting manually, makes sure the onSuccess method can be used by plugins. ([@paales](https://github.com/paales))

## 4.14.0-canary.3

### Minor Changes

- [#1729](https://github.com/graphcommerce-org/graphcommerce/pull/1729) [`366b05a7d`](https://github.com/graphcommerce-org/graphcommerce/commit/366b05a7da174a8a7c665b44e11422d8c873e4ed) - MultiSafePay Payment gateway support ([@paales](https://github.com/paales))