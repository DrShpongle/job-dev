import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import ScrollableHero from 'components/sections/scrollable-hero'
import JamieInYourPocket from 'components/sections/jamie-in-your-pocket'
import BePsyched from 'components/sections/be-psyched'
import Vlog from 'components/sections/vlog'
import TotallyPsyched from 'components/sections/totally-psyched'
import SeaTrees from 'components/sections/sea-trees'
import FixedLabel from 'components/fixed-label'

const Home: NextPage = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted ? (
    <PageLayout>
      <ScrollableHero />
      <JamieInYourPocket />
      <BePsyched />
      <Vlog />
      <TotallyPsyched />
      <SeaTrees />
      <FixedLabel
        title="Maldives"
        subtitleTop="win a trip to the"
        subtitleBottom="with Jamie"
        className="fixed right-0 bottom-20"
      />
    </PageLayout>
  ) : null
}

export default Home
