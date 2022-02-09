import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import Hero from 'components/sections/psych-mag/hero'

const SurfMag: NextPage = () => {
  return (
    <PageLayout>
      <Hero />
    </PageLayout>
  )
}

export default SurfMag
