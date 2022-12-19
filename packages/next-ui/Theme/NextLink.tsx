import Link, { LinkProps as NextLinkProps } from 'next/link'
import { LinkProps as LinkPropsMui } from '@mui/material'
import React, { forwardRef } from 'react'

type LinkProps = Omit<NextLinkProps, 'legacyBehavior' | 'passHref' | 'as'>
type AnchorWithoutLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>
type LinkProppies = AnchorWithoutLinkProps & LinkProps

/**
 * This is a wrapper around the Next.js Link component which can be used with MUI's Link component
 * or any ButtonBase derivative.
 *
 * By default you can use the the props provided by the Link or Button component, but you to pass
 * any next/link specific props like `prefetch`, `replace`, `scroll`, `shallow`
 *
 * ```typescript
 * const button = (
 *   <Link href='/cart' component={NextLink} prefetch={false}>
 *     Cart
 *   </Link>
 * )
 * ```
 */
export const NextLink = forwardRef<any, LinkProppies>((props, ref) => {
  let { href, target, ...rest } = props

  // The href is optional in a MUI link, but required in a Next.js link
  if (!href) return <a {...rest} ref={ref} />

  const hrefString = href.toString()
  const isExternal = hrefString.includes(':') || hrefString.startsWith('//')

  if (isExternal) target = target || '_blank'
  const _target = typeof target === 'undefined' && isExternal ? '_blank' : target

  // Relative URL's cause more pain than they're worth
  if (!isExternal) href = hrefString.startsWith('/') ? href : `/${href}`

  return <Link href={href} {...rest} target={_target} ref={ref} />
})
