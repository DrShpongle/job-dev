import React, {WheelEvent} from 'react'
import type {NextPage} from 'next'
import PageLayout from 'components/layouts/page-layout'

import ScrollableHero from 'components/hero-sections/scrollable-hero'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className="max-w-[1496px] mx-auto">
        <ScrollableHero />
      </div>
    </PageLayout>
  )
}

export default Home
