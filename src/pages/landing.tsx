import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import ScrollableHero from 'components/sections/scrollable-hero'
import GetPsyched from 'components/sections/get-psyched'

import BePsyched from 'components/sections/be-psyched'
import StayPsyched from 'components/sections/stay-psyched'
import Vlog from 'components/sections/vlog'
import PsychMag from 'components/sections/psych-mag'
import SeaTrees from 'components/sections/sea-trees'
import FixedLabel from 'components/fixed-label'

import VideoEmbed from 'components/video-embed'

const Landing: NextPage = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted ? (
    <PageLayout>
      <ScrollableHero />
      <section className="h-screen"></section>
      <GetPsyched />
      <section className="h-screen"></section>
      <BePsyched />
      <StayPsyched />
      <Vlog />
      <PsychMag />
      <SeaTrees />
      <FixedLabel
        title="Maldives"
        subtitleTop="win a trip to the"
        subtitleBottom="with Jamie"
        className="fixed right-0 bottom-20"
      />
    </PageLayout>
  ) : // <div className="relative min-h-screen">
  //   <ScrollableHero />
  //   <section className="h-screen"></section>
  //   <GetPsyched />
  //   <section className="h-screen"></section>
  //   <section className="relative h-screen bg-green-500"></section>
  // </div>
  null
}

export default Landing
