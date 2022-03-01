---
menu: 4. Build pages
---

> **Developer preview**  
> This is a developer preview of GraphCommerce. The documentation will be
> updated as GraphCommerce introduces
> [new features and refines existing functionality](https://github.com/ho-nl/m2-pwa/releases).

# Build pages in GraphCommerce

Previously, you created a custom storefront and started customizing your
storefront in GraphCommerce. You're now ready to build pages in your
GraphCommerce app.

In this tutorial, you'll accomplish a series of tasks to add some specific
functionality to your custom storefront. The result will be simple, but you'll
learn where to find resources to build more complex features on your own.

## What you'll learn

- Create a new route
- Add the page GraphQL queries required to render the layout (header, footer)
- Use getStaticProps to fetch GraphCMS data
- Use getStaticPaths to provide a list of all urls to pre-render

### Requirements

You've familiarized yourself with
[React ↗](https://reactjs.org/docs/getting-started.html),
[Next.js ↗](https://nextjs.org/docs/getting-started), and
[Mui ↗](https://mui.com/getting-started/installation/). GraphCommerce is a
frontend React framework that uses Next.js for server-side rendering.

---

### Create the route

- Create a new file, /about/about-us.tsx:

```tsx
export default function AboutUs() {
  return <>About Us</>
}
```

- Visit the page: http://localhost:3000/about/about-us

### Add GraphQL query

- In /about/about-us.tsx, replace the previous code with the following:

```tsx
import { PageOptions } from '@graphcommerce/framer-next-pages'
import { StoreConfigDocument } from '@graphcommerce/magento-store'
import { GetStaticProps } from '@graphcommerce/next-ui'
import { Container } from '@mui/material'
import { GetStaticPaths } from 'next'
import { LayoutFull, LayoutFullProps } from '../../components'
import {
  DefaultPageDocument,
  DefaultPageQuery,
} from '../../graphql/DefaultPage.gql'
import { PagesStaticPathsDocument } from '../../graphql/PagesStaticPaths.gql'
import {
  graphqlSsrClient,
  graphqlSharedClient,
} from '../../lib/graphql/graphqlSsrClient'

type Props = DefaultPageQuery
type RouteProps = { url: string }
type GetPageStaticPaths = GetStaticPaths<RouteProps>
type GetPageStaticProps = GetStaticProps<LayoutFullProps, Props, RouteProps>

function AboutUs() {
  return <Container>About Us</Container>
}

AboutUs.pageOptions = {
  Layout: LayoutFull,
} as PageOptions

export default AboutUs

export const getStaticProps: GetPageStaticProps = async (context) => {
  const { locale } = context
  const client = graphqlSharedClient(locale)
  const staticClient = graphqlSsrClient(locale)

  const conf = client.query({ query: StoreConfigDocument })
  const page = staticClient.query({
    query: DefaultPageDocument,
    variables: {
      url: '',
      rootCategory: (await conf).data.storeConfig?.root_category_uid ?? '',
    },
  })
  // if (!(await page).data.pages?.[0]) return { notFound: true }
  return {
    props: {
      ...(await page).data,
      apolloState: await conf.then(() => client.cache.extract()),
    },
    revalidate: 60 * 20,
  }
}
```

- Visiting http://localhost:3000/about/about-us will output:

<figure>
 <img src="https://cdn-std.droplr.net/files/acc_857465/xdI9be" />
  <figcaption>Page with page layout (header, footer)</figcaption>
</figure>

```tsx
// Example from /graphql/DefaultPage.graphql (DefaultPageDocument)

query DefaultPage($url: String!, $rootCategory: String!) {
  ...MenuQueryFragment
  ...FooterQueryFragment
  ...PageContentQueryFragment
}
```

In the `getStaticProps` function, the query `StoreConfigDocument` is used to
fetch information about the Magento storeview. Then, the query
`DefaultPageDocument` is used to fetch the data required to render the menu,
footer and page content.

In this example, the url variable is empty. As a result, the
`...PageContentQueryFragment` will have no result when trying to fetch a
GraphCMS page with URL `''`.

The function `getStaticProps` is used to fetch data, meaning content is rendered
on the server. Review the page's source code and search for `About Us` to
validate that this string (currently hard-coded) is part of the source code.

### Add GraphCMS content to the page

- Login to GraphCMS, navigate to Content and add a new Page entry with URL:
  about/about-us
- In /about/about-us.tsx, make the following change to `getStaticProps`:

```tsx
const page = staticClient.query({
  query: DefaultPageDocument,
  variables: {
    url: 'about/about-us',
    rootCategory: (await conf).data.storeConfig?.root_category_uid ?? '',
  },
})
```

And replace the previous AboutUs function with the following:

```tsx
function AboutUs({ pages }: Props) {
  const title = pages?.[0].title ?? ''

  return <Container>{title}</Container>
}
```

<figure>
 <img src="https://cdn-std.droplr.net/files/acc_857465/PIOjzB" />
  <figcaption>Fetch page content from GraphCMS</figcaption>
</figure>

<figure>
 <img src="https://cdn-std.droplr.net/files/acc_857465/XKo4ut" />
  <figcaption>GraphCMS entry</figcaption>
</figure>

### Add pre-rendering with getStaticPaths

- Rename `/about/about-us.tsx` to `/about/[url].tsx`
- In /about/[url].tsx, replace the getStaticProps function with the following:

```tsx
export const getStaticPaths: GetPageStaticPaths = (context) => ({
  paths: [],
  fallback: 'blocking',
})

export const getStaticProps: GetPageStaticProps = async (context) => {
  const { locale, params } = context
  const client = graphqlSharedClient(locale)
  const staticClient = graphqlSsrClient(locale)

  const conf = client.query({ query: StoreConfigDocument })
  const page = staticClient.query({
    query: DefaultPageDocument,
    variables: {
      url: `about/${params?.url}`,
      rootCategory: (await conf).data.storeConfig?.root_category_uid ?? '',
    },
  })
  // if (!(await page).data.pages?.[0]) return { notFound: true }
  return {
    props: {
      ...(await page).data,
      apolloState: await conf.then(() => client.cache.extract()),
    },
    revalidate: 60 * 20,
  }
}
```

By renaming the file to `/about/[url].tsx`, all routes starting with /about/
will be handled by the file (dynamic routing). Pages that have dynamic routes
need a list of paths to be statically generated.

All paths specified by a function called `getStaticPaths` will be statically
pre-redered at build-time.

In the example above, the array with paths is empty. The required getStaticPaths
function is there, but no url's are pre-rendered. Because getStaticPaths has the
option `fallback: 'blocking'`, the paths that have not been pre-rendered at
built-time will not result in a 404:

> From the
> [getStaticPaths API reference ↗](https://nextjs.org/docs/api-reference/data-fetching/get-static-paths):
> If fallback is 'blocking', new paths not returned by getStaticPaths will wait
> for the HTML to be generated, identical to SSR (hence why blocking), and then
> be cached for future requests so it only happens once per path.

### Pre-render all /about/ pages from GraphCMS

- In /about/[url].tsx, replace the getStaticPaths function with the following:

```tsx
export const getStaticPaths: GetPageStaticPaths = async (context) => {
  const { locales = [] } = context
  // if (process.env.NODE_ENV === 'development') return { paths: [], fallback: 'blocking' }

  const path = async (locale: string) => {
    const client = graphqlSharedClient(locale)
    const { data } = await client.query({
      query: PagesStaticPathsDocument,
      variables: {
        first: 10,
        urlStartsWith: 'about',
      },
    })
    return data.pages.map((page) => ({
      params: { url: page.url.split('/').slice(1)[0] },
      locale,
    }))
  }
  const paths = (await Promise.all(locales.map(path))).flat(1)

  return { paths, fallback: 'blocking' }
}
```

Test the static build process by running it locally:

- `cd /examples/magento-graphcms/` Navigate to the project directory
- `yarn build` Start static build process

<figure>
 <img src="https://cdn-std.droplr.net/files/acc_857465/AAOnX2" />
  <figcaption>Successful pre-render of the about/about-us page</figcaption>
</figure>

## Next steps

- Learn how to
  [build a custom GraphCMS component](../getting-started/graphcms-component.md)