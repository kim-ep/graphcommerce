import { Image } from '@graphcommerce/image'
import { useDisplayInclTax } from '@graphcommerce/magento-cart'
import { useProductLink } from '@graphcommerce/magento-product'
import { Money } from '@graphcommerce/magento-store'
import { responsiveVal, extendableComponent, filterNonNullableKeys } from '@graphcommerce/next-ui'
import { Alert, Badge, Box, Link, SxProps, Theme } from '@mui/material'
import PageLink from 'next/link'
import { CartItemFragment } from '../Api/CartItem.gql'
import { RemoveItemFromCartFab } from '../RemoveItemFromCart/RemoveItemFromCartFab'
import { UpdateItemQuantity } from '../UpdateItemQuantity/UpdateItemQuantity'

const rowImageSize = responsiveVal(70, 125)

export type CartItemProps = CartItemFragment & {
  sx?: SxProps<Theme>
  children?: React.ReactNode
} & OwnerState

type OwnerState = { withOptions?: boolean }
const compName = 'CartItem' as const
const parts = [
  'item',
  'picture',
  'badge',
  'productLink',
  'image',
  'itemName',
  'itemPrice',
  'quantity',
  'rowPrice',
] as const
const { withState } = extendableComponent<OwnerState, typeof compName, typeof parts>(
  compName,
  parts,
)

export function CartItem(props: CartItemProps) {
  const { product, errors, uid, prices, quantity, children, withOptions = true, sx = [] } = props
  const { name } = product
  const productLink = useProductLink(product)
  const inclTaxes = useDisplayInclTax()

  const classes = withState({ withOptions })

  return (
    <Box
      className={classes.item}
      sx={[
        (theme) => ({
          display: 'grid',
          gridTemplate: `
            "picture itemName itemName itemName"
            "picture itemOptions itemOptions itemOptions"
            "picture itemPrice quantity rowPrice"`,
          gridTemplateColumns: `${rowImageSize} 1fr minmax(120px, 1fr) 1fr`,
          columnGap: theme.spacings.sm,
          alignItems: 'baseline',
          typography: 'body1',
          marginBottom: theme.spacings.lg,
          marginTop: theme.spacings.md,
          [theme.breakpoints.up('sm')]: {
            gridTemplate: `
              "picture itemName itemName itemName itemName"
              "picture itemOptions itemPrice quantity rowPrice"`,
            gridTemplateColumns: `${rowImageSize} 4fr 1fr minmax(120px, 1fr) minmax(75px, 1fr)`,
            marginBottom: theme.spacings.md,
          },

          '&:not(.withOptions)': {
            display: 'grid',
            gridTemplate: `
            "picture itemName itemName itemName"
            "picture itemPrice quantity rowPrice"`,
            alignItems: 'center',
            gridTemplateColumns: `${rowImageSize} 1fr minmax(120px, 1fr) 1fr`,
            [theme.breakpoints.up('sm')]: {
              gridTemplate: `
              "picture itemName itemPrice quantity rowPrice"
            `,
              gridTemplateColumns: `${rowImageSize} 4fr 1fr minmax(120px, 1fr) minmax(75px, 1fr)`,
            },
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Badge
        color='default'
        badgeContent={
          <RemoveItemFromCartFab
            uid={uid}
            className={classes.badge}
            sx={(theme) => ({
              '& > button': {
                background: theme.palette.background.paper,
                '&:hover, &:active, &:visited': {
                  background: theme.palette.background.paper,
                },
                [theme.breakpoints.down('md')]: {
                  width: 30,
                  height: 30,
                  minHeight: 'unset',
                },
              },
            })}
          />
        }
        component='div'
        className={classes.picture}
        overlap='circular'
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={(theme) => ({
          gridArea: 'picture',
          width: rowImageSize,
          height: rowImageSize,
          padding: responsiveVal(5, 10),
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '50%',
          alignSelf: 'center',
        })}
      >
        <PageLink href={productLink} passHref>
          <Box
            component='a'
            className={classes.productLink}
            sx={{ display: 'block', width: '100%', borderRadius: '50%', overflow: 'hidden' }}
          >
            {product?.thumbnail?.url && (
              <Image
                src={product.thumbnail.url ?? ''}
                layout='fill'
                alt={product.thumbnail.label ?? product.name ?? ''}
                sizes={responsiveVal(70, 125)}
                className={classes.image}
                sx={(theme) => ({
                  gridColumn: 1,
                  backgroundColor: theme.palette.background.image,
                  objectFit: 'cover',
                  display: 'block',
                  width: '110% !important',
                  height: '110% !important',
                  marginLeft: '-5%',
                  marginTop: '-5%',
                })}
              />
            )}
          </Box>
        </PageLink>
      </Badge>

      <Box sx={{ gridArea: 'itemName' }}>
        <PageLink href={productLink} passHref>
          <Link
            variant='body1'
            className={classes.itemName}
            underline='hover'
            sx={(theme) => ({
              typgrapht: 'subtitle1',
              fontWeight: theme.typography.fontWeightBold,
              color: theme.palette.text.primary,
              textDecoration: 'none',
              flexWrap: 'nowrap',
              maxWidth: 'max-content',
              '&:not(.withOptions)': {
                alignSelf: 'flex-end',
              },
            })}
          >
            {name}
          </Link>
        </PageLink>
        {filterNonNullableKeys(errors).map((error) => (
          <Box sx={{ color: 'error.main', typography: 'caption' }} key={error.message}>
            {error.message}
          </Box>
        ))}
      </Box>

      <Box
        className={classes.itemPrice}
        sx={(theme) => ({
          gridArea: 'itemPrice',
          textAlign: 'left',
          color: theme.palette.text.secondary,
          alignSelf: 'center',
          [theme.breakpoints.up('sm')]: {
            alignSelf: 'flex-start',
          },
        })}
      >
        {inclTaxes ? (
          <Money
            value={(prices?.row_total_including_tax?.value ?? 0) / quantity}
            currency={prices?.price.currency}
          />
        ) : (
          <Money {...prices?.price} />
        )}
      </Box>

      <Box
        className={classes.quantity}
        sx={(theme) => ({
          gridArea: 'quantity',
          justifySelf: 'right',
          transform: 'translateY(0)',
          [theme.breakpoints.up('sm')]: {
            transform: 'translateY(-6px)',
          },
        })}
      >
        <UpdateItemQuantity uid={uid} quantity={quantity} />
      </Box>

      <Box
        className={classes.rowPrice}
        sx={(theme) => ({
          gridArea: 'rowPrice',
          textAlign: 'right',
          alignSelf: 'center',
          [theme.breakpoints.up('sm')]: {
            alignSelf: 'flex-start',
          },
        })}
      >
        <Money {...(inclTaxes ? prices?.row_total_including_tax : prices?.row_total)} /> <br />
      </Box>

      {children}
    </Box>
  )
}
