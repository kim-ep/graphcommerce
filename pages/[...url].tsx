import React from 'react'
import ShopLayout, { PageWithShopLayout, ShopLayoutProps } from 'components/ShopLayout'
import getHeaderProps from 'components/Header/getHeaderProps'
import { GetStaticProps, GetStaticPaths } from 'next'
import getUrlResolveProps from 'components/ShopLayout/getUrlResolveProps'
import getCategoryPageProps, {
  GetCategoryPageProps,
} from 'components/CategoryPage/getCategoryPageProps'
import CategoryMeta from 'components/CategoryMeta'
import CategoryBreadcrumb from 'components/CategoryBreadcrumb'
import CategoryDescription from 'components/CategoryDescription'
import CategoryChildren from 'components/CategoryChildren'
import ProductListPagination from 'components/ProductListPagination'
import ProductListSort from 'components/ProductListSort'
import ProductListFilters from 'components/ProductListFilters'
import ProductListItems from 'components/ProductListItems'
import NextError from 'next/error'
import { Container } from '@material-ui/core'
import useCategoryPageStyles from 'components/CategoryPage/useCategoryPageStyles'
import ScrollSnapSlider from 'components/ScrollSnapSlider'
import clsx from 'clsx'
import { ProductListParamsProvider } from 'components/CategoryPage/CategoryPageContext'
import ProductListItemSimple from 'components/ProductTypeSimple/ProductListItemSimple'
import ProductListItemConfigurable from 'components/ProductTypeConfigurable/ProductListItemConfigurable'
import ProductListItem from 'components/ProductListItems/ProductListItem'
import { useHeaderSpacing } from 'components/Header/useHeaderSpacing'
import getStoreConfig from 'components/StoreConfig/getStoreConfig'
import apolloClient from 'lib/apolloClient'
import ProductListItemBundle from 'components/ProductTypeBundle/ProductListItemBundle'
import ProductListItemVirtual from 'components/ProductTypeVirtual/ProductListItemVirtual'
import ProductListItemDownloadable from 'components/ProductTypeDownloadable/ProductListItemDownloadable'

const CategoryPage: PageWithShopLayout<GetCategoryPageProps> = (props) => {
  const classes = useCategoryPageStyles(props)
  const { marginTop } = useHeaderSpacing()
  const { categoryList, products, filters, params, filterTypeMap } = props

  if (!categoryList || !categoryList[0] || !products || !params || !filters || !filterTypeMap)
    return <NextError statusCode={503} title='Loading skeleton' />

  return (
    <>
      <ProductListParamsProvider value={params}>
        <CategoryMeta {...categoryList[0]} />
        <Container className={clsx(classes.container, marginTop)}>
          <CategoryBreadcrumb
            name={categoryList[0].name}
            breadcrumbs={categoryList[0].breadcrumbs}
            className={classes.breadcrumb}
          />
          <CategoryDescription
            name={categoryList[0].name}
            description={categoryList[0].description}
            className={classes.description}
          />
          <ScrollSnapSlider classes={{ container: classes.filters }}>
            <CategoryChildren params={params} className={classes.filterItem}>
              {categoryList[0].children}
            </CategoryChildren>
            <ProductListSort sort_fields={products.sort_fields} className={classes.filterItem} />
            <ProductListFilters
              aggregations={filters.aggregations}
              filterTypeMap={filterTypeMap}
              className={classes.filterItem}
            />
          </ScrollSnapSlider>
          <ProductListItems
            items={products.items}
            className={classes.items}
            filterTypeMap={filterTypeMap}
            renderers={{
              SimpleProduct: ProductListItemSimple,
              ConfigurableProduct: ProductListItemConfigurable,
              BundleProduct: ProductListItemBundle,
              VirtualProduct: ProductListItemVirtual,
              DownloadableProduct: ProductListItemDownloadable,
              GroupedProduct: ProductListItem,
            }}
          />
          <ProductListPagination page_info={products.page_info} className={classes.pagination} />
        </Container>
      </ProductListParamsProvider>
    </>
  )
}
CategoryPage.Layout = ShopLayout

export default CategoryPage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { url: ['producten'] } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  ShopLayoutProps & GetCategoryPageProps,
  { url: [string] }
> = async (ctx) => {
  if (!ctx.params) throw new Error('No params')

  const queryIdnex = ctx.params.url.findIndex((slug) => slug === 'q')
  const qIndex = queryIdnex < 0 ? ctx.params.url.length : queryIdnex

  const url = ctx.params.url.slice(0, qIndex)

  const client = apolloClient()
  const staticClient = apolloClient()
  const config = getStoreConfig(client)
  const urlResolve = getUrlResolveProps({ urlKey: url.join('/') }, staticClient)
  const categoryPage = getCategoryPageProps(
    {
      urlParams: ctx.params.url.slice(qIndex + 1),
      urlResolve,
      url,
    },
    staticClient,
  )
  const navigation = getHeaderProps(staticClient, {
    rootCategory: String((await config).storeConfig?.root_category_id),
  })

  return {
    props: {
      ...(await urlResolve),
      ...(await navigation),
      ...(await categoryPage),
      apolloState: client.cache.extract(),
    },
  }
}
