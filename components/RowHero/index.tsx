import React from 'react'
import { makeStyles, Container, ContainerProps, Theme } from '@material-ui/core'
import clsx from 'clsx'
import RichText from '../RichText'
import Asset from '../Asset'
import { UseStyles } from '../Theme'
import { UseRichTextStyles } from '../RichText/useRichTextStyles'
import { useHeaderSpacing } from '../Header'
import { Button } from '../Link'
import { ChevronRight } from '../Icons'
import TriangleBg, { TriangleBgProps } from '../TriangleBg'

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      gridColumnGap: theme.gridSpacing.column,
      gridRowGap: theme.gridSpacing.row,
      // marginBottom: theme.spacings.xl,
      display: `grid`,
      gridTemplateColumns: `1fr`,
      gridTemplateAreas: `
        "one"
        "two"
      `,
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: `1fr 1fr`,
        gridTemplateAreas: `
          "one two"
        `,
      },
      alignItems: 'center',
    },
    video: {
      width: '100%',
      height: '100%',
      minHeight: '60vh',
      objectFit: 'cover',
    },
  }),
  { name: 'RowHero' },
)

export type RowHeroProps = GQLRowHeroFragment &
  UseStyles<typeof useStyles> & {
    richTextClasses?: UseRichTextStyles['classes']
    triangleBgProps?: Partial<TriangleBgProps>
  } & ContainerProps

const RowHero: React.FC<RowHeroProps> = (props) => {
  const { text, asset, links, richTextClasses, triangleBgProps } = props
  const { video, ...containerClasses } = useStyles(props)
  const headerSpacing = useHeaderSpacing()

  return (
    <TriangleBg color='secondary' {...triangleBgProps}>
      <Container
        classes={containerClasses}
        className={clsx(headerSpacing.paddingTop, headerSpacing.paddingBottom)}
      >
        <Asset asset={asset} autoPlay loop muted playsInline className={video} />
        <div>
          <RichText {...text} classes={richTextClasses} />
          <div>
            {links.map((link) => {
              if (link.__typename === 'LinkInternal' && link.page)
                return (
                  <Button
                    href={link.page.url}
                    metaRobots={link.page.metaRobots}
                    key={link.id}
                    size='large'
                    variant='contained'
                    color='primary'
                    endIcon={<ChevronRight />}
                  >
                    {link.title}
                  </Button>
                )
              if (link.__typename === 'LinkExternal')
                return (
                  <a
                    href={link.url}
                    target='_blank'
                    rel='noopener nofollow noreferrer'
                    key={link.id}
                  >
                    {link.title}
                  </a>
                )
              return undefined
            })}
          </div>
        </div>
      </Container>
    </TriangleBg>
  )
}

export default RowHero
