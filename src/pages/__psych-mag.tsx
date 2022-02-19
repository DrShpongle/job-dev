import * as React from 'react'
import type {NextPage} from 'next'
import Storyblok from 'utils/storyblok-service'

import DynamicComponent from 'components/sections/psych-mag/dynamic-component'
import PageLayout from 'components/layouts/page-layout'
// import Hero from 'components/sections/psych-mag/hero'
// import Features from 'components/sections/psych-mag/features'
// import TopTips from 'components/sections/psych-mag/top-tips'
// import Gear from 'components/sections/psych-mag/gear'
// import TravelGuides from 'components/sections/psych-mag/travel-guides'

const PsychMag: NextPage = (props: any) => {
  const story = props.story
  return (
    <PageLayout>
      {/* <Hero />
      <Features />
      <TopTips />
      <Gear />
      <TravelGuides /> */}
      <DynamicComponent blok={story.content} />
    </PageLayout>
  )
}

export default PsychMag

export async function getStaticProps({preview = false}) {
  // home is the default slug for the homepage in Storyblok
  let slug = 'psych-mag'
  // load the published content outside of the preview mode
  let sbParams = {
    version: 'draft', // or 'published'
  }

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = 'draft'
    // @ts-ignore
    sbParams.cv = Date.now()
  }

  let {data} = await Storyblok.get(`cdn/stories/${slug}`, sbParams)

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  }
}
