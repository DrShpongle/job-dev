import {NextSeo} from 'next-seo'
import DynamicComponent from 'components/dynamic-component'
import Storyblok, {useStoryblok} from 'utils/storyblok-service'
import {isEmpty} from 'lodash'

export default function Page(props) {
  const {story, preview} = props
  const enableBridge = true
  const actualStory = useStoryblok(story, enableBridge)
  const defaultSeoImage = `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/images/og-image.png`
  const seoPage =
    actualStory.content.component === 'page'
      ? actualStory.content?.seo?.[0]
      : {}
  const seoArticle =
    actualStory.content.component === 'article'
      ? {
          title: actualStory.content.title,
          description: actualStory.content.short_description,
          image: actualStory.content.hero_image,
        }
      : {}

  let seo = {}

  switch (actualStory.content.component) {
    case 'page':
      seo = seoPage
      break
    case 'article':
      seo = seoArticle
      break
    default:
      seo = {}
  }

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.description}
        openGraph={{
          title: seo.title,
          description: seo.description,
          url: `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}${
            actualStory.content.component === 'article' ? '/articles/' : '/'
          }${actualStory.slug}`,
          images: [
            {
              url: seo?.image?.filename || defaultSeoImage,
            },
          ],
        }}
      />
      <DynamicComponent blok={actualStory.content} />
    </>
  )
}

export async function getStaticProps({params, preview = false}) {
  let slug = params.slug ? params.slug.join('/') : 'teaser'

  let sbParams = {
    version: 'draft',
  }

  if (preview) {
    sbParams.version = 'draft'
    sbParams.cv = Date.now()
  }

  let {data} = await Storyblok.get(`cdn/stories/${slug}`, sbParams)

  return {
    props: {
      story: data ? data.story : false,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  }
}

export async function getStaticPaths() {
  let {data} = await Storyblok.get('cdn/links/')

  let paths = []
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return
    }

    const slug = data.links[linkKey].slug
    let splittedSlug = slug.split('/')
    if (slug === 'teaser') splittedSlug = false

    paths.push({params: {slug: splittedSlug}})
  })

  return {
    paths: paths,
    fallback: false,
  }
}
