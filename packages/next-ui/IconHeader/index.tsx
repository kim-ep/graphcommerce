import { Box, SxProps, Theme, Typography } from '@mui/material'
import clsx from 'clsx'
import { extendableComponent } from '../Styles'
import { SvgIcon, SvgIconProps } from '../SvgIcon/SvgIcon'

// TODO: remove all occurrences. deprecated component

export type IconHeaderSize = 'small' | 'medium' | 'large'

type IconHeaderProps = {
  children: React.ReactNode
  size?: IconHeaderSize
  noMargin?: boolean
  stayInline?: boolean
  ellipsis?: boolean
  sx?: SxProps<Theme>
} & Pick<SvgIconProps, 'src'>

type IconHeaderHeadings = 'h2' | 'h4' | 'h5'

const { componentName, classes, selectors } = extendableComponent('IconHeader', [
  'container',
  'innerContainer',
  'breakColumnsDesktop',
  'margin',
  'ellipsis',
  'mediumFontWeight',
] as const)

export function IconHeader(props: IconHeaderProps) {
  const {
    children,
    size = 'large',
    stayInline = false,
    noMargin = false,
    ellipsis = false,
    src,
    sx = [],
  } = props

  const variants: Record<IconHeaderSize, IconHeaderHeadings> = {
    small: 'h5',
    medium: 'h4',
    large: 'h2',
  }

  return (
    <Box
      className={componentName}
      sx={[
        {
          typography: 'subtitle1',
          textAlign: 'center',
        },
        !noMargin &&
          ((theme) => ({
            marginTop: theme.spacings.sm,
            marginBottom: theme.spacings.sm,
          })),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        className={clsx(classes.innerContainer, !stayInline && classes.breakColumnsDesktop)}
        sx={[
          {
            display: { xs: 'flex', md: stayInline ? 'flex' : 'unset' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          },
        ]}
      >
        <SvgIcon src={src} />
        <Typography
          variant={variants[size]}
          component='h2'
          className={clsx(
            ellipsis && classes.ellipsis,
            size === 'medium' && classes.mediumFontWeight,
          )}
          sx={[
            ellipsis && {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            size === 'medium' && { fontWeight: 'bold' },
          ]}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  )
}

IconHeader.selectors = selectors
