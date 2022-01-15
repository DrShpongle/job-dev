import React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import ScrollableHero from 'components/sections/scrollable-hero'
import JamieInYourPocket from 'components/sections/jamie-in-your-pocket'
import SeaTrees from 'components/sections/sea-trees'
import TotallyPsyched from 'components/sections/totally-psyched'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <ScrollableHero />
      <JamieInYourPocket />
      <TotallyPsyched />
      <SeaTrees />
    </PageLayout>
  )
}

export default Home
