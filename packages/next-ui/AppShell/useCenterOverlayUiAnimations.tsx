import { useMediaQuery, useTheme } from '@material-ui/core'
import { MotionProps } from 'framer-motion'
import { OverlayUiAnimationProps } from './useBottomOverlayUiAnimations'

export default function useCenterOverlayUiAnimations(props: OverlayUiAnimationProps): MotionProps {
  const { hold, dismissed, z } = props
  const theme = useTheme()
  const upMd = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true })

  if (upMd) {
    return !hold
      ? {
          initial: {
            z,
            opacity: 0,
            origin: '50% 50%',
            scale: 0,
          },
          animate: {
            z,
            origin: '50% 50%',
            scale: 1,
            opacity: 1,
            display: 'block',
            transition: {
              type: 'tween',
              ease: 'backInOut',
            },
            ...(dismissed && {
              opacity: 0,
              scale: 0,
              transitionEnd: { display: 'none' },
            }),
          },
        }
      : {
          initial: {
            opacity: 1,
            z,
            scale: 1,
            origin: '50% 50%',
            scale: 1,
          },
          animate: {
            opacity: 1,
            z,
            scale: 1,
            origin: '50% 50%',
            y: '-20%',
            transition: { type: 'tween', ease: 'easeOut' },
          },
          exit: {
            opacity: 1,
            origin: '50% 50%',
            z,
            scale: 1,
            transition: { type: 'tween', ease: 'easeIn' },
          },
        }
  }

  return !hold
    ? {
        initial: {
          y: '90%',
          z,
          x: 0,
          opacity: 0,
          originY: 0,
        },
        animate: {
          y: '0',
          z,
          x: 0,
          opacity: 1,
          display: 'block',
          transition: { type: 'tween', ease: 'easeOut' },
          ...(dismissed && {
            y: '90%',
            opacity: 0,
            transition: { type: 'tween', ease: 'easeIn' },
            transitionEnd: { display: 'none' },
          }),
        },
      }
    : {
        initial: {
          opacity: 1,
          z,
          x: 0,
          y: 0,
        },
        animate: {
          opacity: 1,
          z,
          x: 0,
          y: 0,
          transition: { type: 'tween', ease: 'easeOut' },
        },
        exit: {
          opacity: 1,
          z,
          x: 0,
          y: 0,
          transition: { type: 'tween', ease: 'easeIn' },
        },
      }
}
