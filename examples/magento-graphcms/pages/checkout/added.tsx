import { PageOptions } from '@graphcommerce/framer-next-pages'
import { useScrollerContext, useScrollTo } from '@graphcommerce/framer-scroller'
import { useMotionValueValue } from '@graphcommerce/framer-utils'
import { useQuery } from '@graphcommerce/graphql'
import { Image } from '@graphcommerce/image'
import { CartAddedDocument, CrosssellsDocument, useCartQuery } from '@graphcommerce/magento-cart'
import { AddProductsToCartForm } from '@graphcommerce/magento-product'
import { PageMeta, StoreConfigDocument } from '@graphcommerce/magento-store'
import {
  Button,
  filterNonNullableKeys,
  GetStaticProps,
  iconChevronRight,
  IconSvg,
  ItemScroller,
  RenderType,
  responsiveVal,
} from '@graphcommerce/next-ui'
import { LayoutHeaderClose } from '@graphcommerce/next-ui/Layout/components/LayoutHeaderClose'
import { i18n } from '@lingui/core'
import { Trans } from '@lingui/react'
import { Box, Container, Divider, Typography } from '@mui/material'
import PageLink from 'next/link'
import { useEffect, useMemo, useRef } from 'react'
import { LayoutOverlay, LayoutOverlayProps, productListRenderer } from '../../components'
import { graphqlSharedClient } from '../../lib/graphql/graphqlSsrClient'

type Props = Record<string, unknown>
type GetPageStaticProps = GetStaticProps<LayoutOverlayProps, Props>

function CheckoutAdded() {
  const latestItems = useCartQuery(CartAddedDocument)
  const items = filterNonNullableKeys(latestItems.data?.cart?.items)
  const lastItem = items[items.length - 1]

  const crosssels = useQuery(CrosssellsDocument, {
    variables: { pageSize: 1, filters: { sku: { eq: lastItem?.product.sku } } },
    ssr: false,
  })
  const crossSellItems = useMemo(
    () => filterNonNullableKeys(crosssels.data?.products?.items?.[0]?.crosssell_products),
    [crosssels.data?.products?.items],
  )

  const readyOnce = useRef(false)
  const ready = useMotionValueValue(useScrollerContext().snap, (snapV) => {
    if (snapV) readyOnce.current = true
    return readyOnce.current
  })

  const { getSnapPosition } = useScrollerContext()
  const scrollTo = useScrollTo()

  const showCrossSell = crossSellItems.length > 0 && ready

  useEffect(() => {
    if (showCrossSell) setTimeout(() => scrollTo(getSnapPosition('down')), 10)
  }, [getSnapPosition, scrollTo, showCrossSell])

  return (
    <>
      <PageMeta title={i18n._(/* i18n */ 'Cart')} metaRobots={['noindex']} />

      <Container
        maxWidth={false}
        sx={(theme) => ({
          // width: '100%', // `min(1400px, ${clientSizeCssVar.x})`,
          display: 'grid',
          py: 2,
          alignItems: { xs: 'start', md: 'center' },
          gap: theme.spacings.xxs,
          gridTemplate: {
            xs: `"icon children close"
                 "action action   action"`,
            md: '"icon children action close"',
          },
          gridTemplateColumns: {
            xs: 'min-content 1fr auto',
            md: 'min-content 1fr max-content auto',
          },

          '&.IconSvg': {
            gridArea: 'children',
          },
          scrollSnapAlign: 'end',
        })}
      >
        {lastItem?.product.thumbnail?.url ? (
          <Image
            src={lastItem?.product.thumbnail?.url}
            width={50}
            height={50}
            layout='fill'
            sx={{
              width: responsiveVal(50, 80),
              height: responsiveVal(50, 80),
              display: 'block',
              borderRadius: 1,
              objectFit: 'contain',
            }}
            pictureProps={{ sx: { gridArea: 'icon', alignSelf: 'stretch' } }}
            sizes='100px'
          />
        ) : (
          <Box
            sx={{
              gridArea: 'icon',
              alignSelf: 'stretch',
              width: responsiveVal(50, 80),
              height: responsiveVal(50, 80),
            }}
          />
        )}

        {/* <IconSvg src={iconCheckmark} size='large' /> */}
        <Box gridArea='children'>
          <Box sx={{ typography: 'h6' }}>
            <Trans
              id='<0>{name}</0> has been added to your shopping cart!'
              components={{ 0: <strong /> }}
              values={{ name: lastItem?.product.name }}
            />
          </Box>
          {showCrossSell && (
            <Box sx={{ typography: 'body1', display: { xs: 'none', md: 'block' } }}>
              <Trans id='Have you thought about this yet?' />{' '}
            </Box>
          )}
        </Box>
        <Box gridArea='action'>
          <PageLink href='/cart' passHref replace>
            <Button
              id='view-shopping-cart-button'
              size='large'
              variant='pill'
              color='secondary'
              endIcon={<IconSvg src={iconChevronRight} />}
              sx={{ display: 'flex' }}
            >
              <Trans id='View shopping cart' />
            </Button>
          </PageLink>
        </Box>
        <LayoutHeaderClose />
      </Container>

      {showCrossSell && (
        <>
          <Container maxWidth={false}>
            <Divider />
            <Typography
              variant='h6'
              gutterBottom
              sx={(theme) => ({
                display: { xs: 'block', md: 'none' },
                my: theme.spacings.sm,
                textAlign: 'center',
              })}
            >
              <Trans id='Have you thought about this yet?' />
            </Typography>
          </Container>
          <AddProductsToCartForm>
            <ItemScroller
              sx={(theme) => ({
                width: 'auto', // `min(1400px, ${clientSizeCssVar.x})`,
                mb: theme.page.vertical,
              })}
            >
              {crossSellItems.map((item) => (
                <RenderType
                  key={item.uid ?? ''}
                  renderer={productListRenderer}
                  {...item}
                  sizes={responsiveVal(200, 300)}
                />
              ))}
            </ItemScroller>
          </AddProductsToCartForm>
        </>
      )}
    </>
  )
}

const pageOptions: PageOptions<LayoutOverlayProps> = {
  overlayGroup: 'checkout',
  Layout: LayoutOverlay,
  layoutProps: {
    variantMd: 'bottom',
    variantSm: 'bottom',
    sizeMd: 'minimal',
    sizeSm: 'minimal',
    justifyMd: 'stretch',
    justifySm: 'stretch',
  },
}
CheckoutAdded.pageOptions = pageOptions

export default CheckoutAdded

export const getStaticProps: GetPageStaticProps = async ({ locale }) => {
  const client = graphqlSharedClient(locale)
  const conf = client.query({ query: StoreConfigDocument })

  return {
    props: {
      apolloState: await conf.then(() => client.cache.extract()),
    },
  }
}
