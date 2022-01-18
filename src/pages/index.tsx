import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import ScrollableHero from 'components/sections/scrollable-hero'
import JamieInYourPocket from 'components/sections/jamie-in-your-pocket'
import BePsyched from 'components/sections/be-psyched'
import TotallyPsyched from 'components/sections/totally-psyched'
import SeaTrees from 'components/sections/sea-trees'

const Home: NextPage = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <PageLayout>
      <ScrollableHero />
      <JamieInYourPocket />
      {isMounted && <BePsyched />}
      <TotallyPsyched />
      <SeaTrees />
    </PageLayout>
  )
}

export default Home
