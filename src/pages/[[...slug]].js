import {NextSeo} from 'next-seo'
import DynamicComponent from 'components/dynamic-component'
import Storyblok, {useStoryblok} from 'utils/storyblok-service'
import {isEmpty} from 'lodash'

export default function Page(props) {
  const {story, preview} = props
  const enableBridge = true
  const actualStory = useStoryblok(story, enableBridge)
  const seoObj = actualStory.content?.seo?.[0]
  const seo = isEmpty(seoObj)
    ? {}
    : Object.keys(seoObj)
        .filter(
          (key) => key !== '_editable' && key !== '_uid' && key !== 'component',
        )
        .reduce((obj, key) => {
          return Object.assign(obj, {
            [key]: seoObj[key],
          })
        }, {})

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.description}
        openGraph={{
          title: seo.title,
          description: seo.description,
          url: `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/${actualStory.slug}`,
          images: [
            {
              url: 'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1637345011/egghead-next-pages/home-page/root-og_2x.png',
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
