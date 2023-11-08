import { SxProps, Theme } from '@mui/material'
import { CustomerDocument } from '../../hooks'
import { useCustomerQuery } from '../../hooks/useCustomerQuery'
import { AccountSignInUpIsEmailAvailableForm } from './AccountSignInUpIsEmailAvailableForm'
import { AccountSignInUpToggleForm } from './AccountSignInUpToggleForm'

// When the guestCheckout is disabled in Magento add loginMethod "TOGGLE" to your config to enable the toggle login / register flow which is mandatory.
// Toggle flow also disables the isEmailAvailable call to the magento backend.

// Default is set to IS_EMAIL_AVAILABLE

export type AccountSignInUpFormProps = { sx?: SxProps<Theme> }

const titleContainerSx: SxProps<Theme> = (theme) => ({
  typography: 'body1',
  marginBottom: theme.spacings.xs,
})

export function AccountSignInUpForm(props: AccountSignInUpFormProps) {
  const { sx = [] } = props
  const customerQuery = useCustomerQuery(CustomerDocument)

  const { email, firstname = '' } = customerQuery.data?.customer || {}
  return (
    <>
      {import.meta.graphCommerce.loginMethod === 'TOGGLE' ? (
        <AccountSignInUpToggleForm
          sx={sx}
          titleContainerSx={titleContainerSx}
          email={email}
          firstName={firstname ?? ''}
        />
      ) : (
        <AccountSignInUpIsEmailAvailableForm
          sx={sx}
          titleContainerSx={titleContainerSx}
          email={email}
          firstName={firstname ?? ''}
        />
      )}
    </>
  )
}
