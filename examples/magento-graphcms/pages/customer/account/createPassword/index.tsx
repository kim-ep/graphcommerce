import { PageOptions } from '@graphcommerce/framer-next-pages'
import { ResetPasswordForm } from '@graphcommerce/magento-customer'
import { PageMeta, StoreConfigDocument } from '@graphcommerce/magento-store'
import { AppShellTitle, Button, GetStaticProps, OverlayAppBar, Title } from '@graphcommerce/next-ui'
import { t, Trans } from '@lingui/macro'
import { Box, Container, Link, NoSsr } from '@material-ui/core'
import router, { useRouter } from 'next/router'
import React from 'react'
import { LayoutOverlay, LayoutOverlayProps } from '../../../../components/Layout/LayoutOverlay'
import apolloClient from '../../../../lib/apolloClient'

type GetPageStaticProps = GetStaticProps<LayoutOverlayProps>

function CustomerAccountCreatePasswordPage() {
  const { query } = useRouter()
  const { token, success } = query

  if (typeof token !== 'undefined' && success === 'undefined') return <></>

  return (
    <>
      <PageMeta
        title={t`Create new password`}
        metaDescription={t`Create new password`}
        metaRobots={['noindex']}
      />
      <OverlayAppBar>
        <Title size='small' component='span'>
          {!success ? t`Set your new password` : t`You have now successfully reset your password`}
        </Title>
      </OverlayAppBar>
      <NoSsr>
        <Box pt={4} pb={4}>
          {!success && (
            <Container maxWidth='sm'>
              <AppShellTitle>
                <Trans>Set your new password</Trans>
              </AppShellTitle>

              <Box textAlign='center'>
                <p>
                  <Trans>Fill in your new password, confirm it and click on the save button.</Trans>
                </p>
              </Box>

              <ResetPasswordForm token={(token as string) ?? ''} />
            </Container>
          )}

          {success && (
            <Container>
              <AppShellTitle>
                <Trans>You have now successfully reset your password</Trans>
              </AppShellTitle>

              <Box textAlign='center'>
                <p>
                  <Trans>
                    You can now
                    <Link color='primary' href='/account/signin'>
                      sign in again
                    </Link>
                    .
                  </Trans>
                </p>

                <Button
                  onClick={() => router.back()}
                  color='primary'
                  variant='contained'
                  size='large'
                >
                  <Trans>Continue shopping</Trans>
                </Button>
              </Box>
            </Container>
          )}
        </Box>
      </NoSsr>
    </>
  )
}

const pageOptions: PageOptions<LayoutOverlayProps> = {
  overlayGroup: 'account-public',
  Layout: LayoutOverlay,
}
CustomerAccountCreatePasswordPage.pageOptions = pageOptions

export default CustomerAccountCreatePasswordPage

export const getStaticProps: GetPageStaticProps = async ({ locale }) => {
  const client = apolloClient(locale, true)
  const conf = client.query({ query: StoreConfigDocument })

  return {
    props: {
      apolloState: await conf.then(() => client.cache.extract()),
      variant: 'bottom',
      size: 'max',
      up: { href: '/account/signin', title: 'Sign In' },
    },
  }
}
