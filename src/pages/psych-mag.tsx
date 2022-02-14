import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import Hero from 'components/sections/psych-mag/hero'
import Features from 'components/sections/psych-mag/features'
import TopTips from 'components/sections/psych-mag/top-tips'
import Gear from 'components/sections/psych-mag/gear'
import TravelGuides from 'components/sections/psych-mag/travel-guides'

const SurfMag: NextPage = () => {
  return (
    <PageLayout>
      <Hero />
      <Features />
      <TopTips />
      <Gear />
      <TravelGuides />
    </PageLayout>
  )
}

export default SurfMag
