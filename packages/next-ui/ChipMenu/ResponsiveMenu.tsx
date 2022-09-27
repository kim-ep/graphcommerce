import { EmotionJSX } from '@emotion/react/types/jsx-namespace'

import {
  ChipProps,
  menuClasses,
  Theme,
  useMediaQuery,
  Menu,
  MenuProps,
  Box,
  SvgIcon,
  ToolbarPropsVariantOverrides,
} from '@mui/material'
import { m } from 'framer-motion'
import { PropsWithChildren, useCallback } from 'react'
import { Button } from '../Button'
import { IconSvg } from '../IconSvg'
import { LayoutTitle } from '../Layout'
import { Overlay } from '../Overlay'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { responsiveVal } from '../Styles'
import { iconClose } from '../icons'

type ResponsiveMenuProps = PropsWithChildren<
  Omit<ChipProps<'button'>, 'children' | 'component'>
> & {
  chip: EmotionJSX.Element
  openEl: null | HTMLElement
  setOpenEl: (input: null) => void
  onClose?: () => void
  onDelete?: (event: any) => void
  menuProps?: Partial<MenuProps>
  labelRight?: React.ReactNode
}

export function ResponsiveMenu(props: ResponsiveMenuProps) {
  const { children, chip, openEl, setOpenEl, menuProps, label, labelRight, onClose, onDelete } =
    props
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'))

  const RMenu = useCallback(() => {
    if (!isDesktop) {
      return (
        <>
          {chip}
          <Overlay
            active={!!openEl}
            onClosed={() => {
              if (onClose) onClose()
              setOpenEl(null)
            }}
            sizeSm='floating'
            variantSm='right'
            overlayPaneProps={{
              initial: false,
            }}
            sx={{
              zIndex: 'drawer',
              '& .LayoutOverlayBase-overlayPane': {
                padding: 2,
                overflow: 'hidden',
                maxHeight: 'calc(-webkit-fill-available)',
                width: '95vw',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  marginBottom: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Button variant='inline' onClick={onClose}>
                  <IconSvg src={iconClose} size='medium' />
                </Button>
                {label}
                <Button variant='inline' onClick={onDelete}>
                  Reset
                </Button>
              </Box>
              <Box sx={{ flex: 1, overflow: 'hidden', overflowY: 'scroll' }}>{children}</Box>
              <Button variant='outlined' sx={{ marginTop: 2 }}>
                Apply
              </Button>
            </Box>
          </Overlay>
        </>
      )
    }

    return (
      <>
        {chip}
        <Menu
          anchorEl={openEl}
          open={!!openEl}
          onClose={() => {
            if (onClose) onClose()
            setOpenEl(null)
          }}
          anchorPosition={{ top: 6, left: 0 }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          {...menuProps}
          sx={[
            (theme) => ({
              marginTop: theme.spacings.xxs,
              [`& .${menuClasses.list}`]: {
                padding: 0,
                '&:focus': { outline: 'none' },
              },
              [`& .${menuClasses.paper}`]: {
                minWidth: responsiveVal(200, 560),
                maxWidth: 560,
                padding: `0 ${theme.spacings.xs} ${theme.spacings.xs}`,
                margin: 0,
                [theme.breakpoints.down('sm')]: {
                  minWidth: 0,
                  width: '100%',
                  maxWidth: `calc(100% - (${theme.page.horizontal} * 2))`,
                  margin: '0 auto',
                },
              },
            }),
            // eslint-disable-next-line no-nested-ternary
            ...(menuProps?.sx ? (Array.isArray(menuProps.sx) ? menuProps.sx : [menuProps.sx]) : []),
          ]}
        >
          <SectionHeader labelLeft={label ?? ''} labelRight={labelRight ?? ''} usePadding />
          {children}
        </Menu>
      </>
    )
  }, [
    children,
    chip,
    isDesktop,
    label,
    labelRight,
    menuProps,
    onClose,
    onDelete,
    openEl,
    setOpenEl,
  ])

  return <RMenu />
}
