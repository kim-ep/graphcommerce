/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */
const config = {
  canonicalBaseUrl: 'https://graphcommerce.vercel.app',
  hygraphEndpoint: 'https://eu-central-1.cdn.hygraph.com/content/ckhx7xadya6xs01yxdujt8i80/master',
  magentoEndpoint: 'https://backend.reachdigital.dev/graphql',
  storefront: [
    { locale: 'en', magentoStoreCode: 'en_US', defaultLocale: true },
    {
      locale: 'nl',
      magentoStoreCode: 'nl_NL',
      hygraphLocales: ['nl', 'en_us'],
      cartDisplayPricesInclTax: true,
    },
    { locale: 'fr-be', magentoStoreCode: 'fr_BE', cartDisplayPricesInclTax: true },
    { locale: 'nl-be', magentoStoreCode: 'nl_BE', cartDisplayPricesInclTax: true },
    { locale: 'en-gb', magentoStoreCode: 'en_GB', cartDisplayPricesInclTax: true },
    { locale: 'en-ca', magentoStoreCode: 'en_CA' },
  ],
  productFiltersPro: true,
  productFiltersLayout: 'SIDEBAR',
  compareVariant: 'CHECKBOX',
  robotsAllow: false,
  demoMode: true,
  limitSsg: true,
  compare: true,

  configurableVariantForSimple: true,
  configurableVariantValues: { url: true, content: true, gallery: true },
}

module.exports = config
