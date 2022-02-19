import React from 'react'
// import Layout from "../components/Layout";
import DynamicComponent from 'components/dynamic-component'

import Storyblok, {useStoryblok} from 'utils/storyblok-service'

export default function Page({story, preview}) {
  const enableBridge = true // load the storyblok bridge everywhere
  // use the preview variable to enable the bridge only in preview mode
  // const enableBridge = preview;
  story = useStoryblok(story, enableBridge)

  return (
    // <Layout locale={locale} locales={locales} defaultLocale={defaultLocale}>
    <DynamicComponent blok={story.content} />
    // </Layout>
  )
}

export async function getStaticProps({params, preview = false}) {
  console.log('params:', params)
  let slug = params.slug ? params.slug.join('/') : 'home'

  let sbParams = {
    version: 'draft', // or "published"
    resolve_relations: ['featured-posts.articles', 'selected-posts.articles'],
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

export async function getStaticPaths({locales}) {
  let {data} = await Storyblok.get('cdn/links/')

  let paths = []
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug
    let splittedSlug = slug.split('/')
    if (slug === 'home') splittedSlug = false

    // create additional languages
    // for (const locale of locales) {
    paths.push({params: {slug: splittedSlug}})
    // }
  })

  return {
    paths: paths,
    fallback: false,
  }
}
