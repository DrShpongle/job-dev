import * as React from 'react'
import type {NextPage} from 'next'
import Storyblok from 'utils/storyblok-service'

import DynamicComponent from 'components/sections/home/dynamic-component'
import PageLayout from 'components/layouts/page-layout'
// import ScrollableHero from 'components/sections/home/scrollable-hero'
// import GetPsyched from 'components/sections/home/get-psyched'
// import BePsyched from 'components/sections/home/be-psyched'
// import StayPsyched from 'components/sections/home/stay-psyched'
// import Vlog from 'components/sections/home/vlog'
// import PsychMag from 'components/sections/home/psych-mag'
// import SeaTrees from 'components/sections/home/sea-trees'
import FixedLabel from 'components/fixed-label'

const Landing: NextPage = (props: any) => {
  const story = props.story
  return (
    <PageLayout>
      {/* <ScrollableHero />
      <GetPsyched />
      <BePsyched />
      <StayPsyched />
      <Vlog />
      <PsychMag />
      <SeaTrees /> */}
      <DynamicComponent blok={story.content} />
      <FixedLabel
        title="Maldives"
        subtitleTop="win a trip to the"
        subtitleBottom="with Jamie"
        className="fixed right-0 bottom-6 md:bottom-20"
      />
    </PageLayout>
  )
}

export default Landing

export async function getStaticProps({preview = false}) {
  // home is the default slug for the homepage in Storyblok
  let slug = 'home'
  // load the published content outside of the preview mode
  let sbParams = {
    version: 'draft', // or 'published'
  }

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = 'draft'
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
