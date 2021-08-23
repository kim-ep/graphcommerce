import { Fab, makeStyles, Theme } from '@material-ui/core'
import { m } from 'framer-motion'
import React from 'react'
import { useScrollerContext } from '../hooks/useScrollerContext'

export type DotsProps = Record<string, never> & {
  classes?: Record<'dots' | 'dot' | 'circle' | 'cicleActive', string>
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    dots: {
      width: 'fit-content',
      display: 'grid',
      gridAutoFlow: 'column',
      padding: `0 7px`,
    },
    dot: {
      boxShadow: 'none',
      margin: `0 -7px`,
      background: 'transparent',
    },
    circle: {
      borderRadius: '50%',
      width: 10,
      height: 10,
      background: theme.palette.text.primary,
    },
    circleActive: {},
  }),
  { name: 'ScrollerDots' },
)

export default function ScrollerDots(props: DotsProps) {
  const classes = useStyles(props)
  const { items } = useScrollerContext()

  return (
    <m.div layout className={classes.dots}>
      {!items.length && (
        <Fab>
          <m.div className={classes.circle} style={{ opacity: 0.2 }} />
        </Fab>
      )}
      {items.map((item, idx) => (
        <Fab
          color='inherit'
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          className={classes.dot}
          size='small'
          // onClick={() => dispatch({ type: 'NAVIGATE', to: idx })}
        >
          <m.div className={classes.circle} style={{ opacity: item.opacity }} />
        </Fab>
      ))}
    </m.div>
  )
}
