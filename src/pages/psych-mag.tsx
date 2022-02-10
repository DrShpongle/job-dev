import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import Hero from 'components/sections/psych-mag/hero'
import Features from 'components/sections/psych-mag/features'

const SurfMag: NextPage = () => {
  return (
    <PageLayout>
      <Hero />
      <Features />
    </PageLayout>
  )
}

export default SurfMag
