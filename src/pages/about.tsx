import * as React from 'react'
import type {NextPage} from 'next'
import PageLayout from 'components/layouts/page-layout'

import JamieInTheWater from 'components/sections/about-jamie/jamie-in-the-water'
import PromoVideos from 'components/sections/about-jamie/promo-videos'

const About: NextPage = () => {
  return (
    <PageLayout>
      <PromoVideos />
      <JamieInTheWater />
    </PageLayout>
  )
}

export default About
