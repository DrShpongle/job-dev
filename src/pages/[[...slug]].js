import DynamicComponent from 'components/dynamic-component'
import Storyblok, {useStoryblok} from 'utils/storyblok-service'

export default function Page(props) {
  const {story, preview} = props
  const enableBridge = true
  const actualStory = useStoryblok(story, enableBridge)

  return <DynamicComponent blok={actualStory.content} />
}

export async function getStaticProps({params, preview = false}) {
  let slug = params.slug ? params.slug.join('/') : 'home'

  let sbParams = {
    version: 'draft', // or "published"
    // resolve_relations: ['featured-posts.articles', 'selected-posts.articles'],
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
    if (slug === 'home') splittedSlug = false

    paths.push({params: {slug: splittedSlug}})
  })

  return {
    paths: paths,
    fallback: false,
  }
}
