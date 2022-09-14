import { Button, ButtonProps } from '@graphcommerce/next-ui'
import { Trans } from '@lingui/react'
import { SxProps, Theme } from '@mui/material'
import { useFormAddProductsToCart } from './AddProductsToCartForm'

export type AddProductsToCartButtonProps = {
  sx?: SxProps<Theme>
} & Pick<
  ButtonProps<'button'>,
  | 'variant'
  | 'color'
  | 'size'
  | 'disabled'
  | 'fullWidth'
  | 'startIcon'
  | 'endIcon'
  | 'onClick'
  | 'loading'
>

export function AddProductsToCartButton(props: AddProductsToCartButtonProps) {
  const { formState } = useFormAddProductsToCart()
  const { loading } = props

  return (
    <Button
      type='submit'
      color='primary'
      variant='pill'
      size='large'
      {...props}
      loading={formState.isSubmitting || loading}
    >
      <Trans id='Add to Cart' />
    </Button>
  )
}
