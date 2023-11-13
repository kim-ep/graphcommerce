import { extendableComponent } from '@graphcommerce/next-ui'
import { Form, FormProvider, useForm } from '@graphcommerce/react-hook-form'
import { SxProps, Theme } from '@mui/material'
import { AccountSignInUpFormComponents } from './AccountSignInUpFormComponents'
import { useRouter } from 'next/router'

export type AccountSignInUpToggleFormProps = {
  sx?: SxProps<Theme>
  titleContainerSx: SxProps<Theme>
  email?: string | null
  firstName: string
}

const parts = ['root', 'titleContainer'] as const
const { classes } = extendableComponent('AccountSignInUpToggleForm', parts)

export function AccountSignInUpToggleForm(props: AccountSignInUpToggleFormProps) {
  const { sx = [], titleContainerSx, email, firstName } = props

  const router = useRouter()

  const form = useForm({
    defaultValues: {
      email: router.query.email,
    },
  })

  return (
    <FormProvider {...form}>
      <AccountSignInUpFormComponents
        sx={sx}
        mode='signin'
        classes={classes}
        titleContainerSx={titleContainerSx}
        firstName={firstName}
        email={email}
      />
    </FormProvider>
  )
}
