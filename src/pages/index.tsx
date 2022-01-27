import * as React from 'react'
import type {NextPage} from 'next'

import Header from 'components/app/header'
import Footer from 'components/app/footer'
import Partnered from 'components/sections/partnered'

import ScrollableHero from 'components/sections/scrollable-hero'
import GetPsyched from 'components/sections/get-psyched'

import BePsyched from 'components/sections/be-psyched'
import StayPsyched from 'components/sections/stay-psyched'
import Vlog from 'components/sections/vlog'
import PsychMag from 'components/sections/psych-mag'
import SeaTrees from 'components/sections/sea-trees'
import FixedLabel from 'components/fixed-label'

const Landing: NextPage = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted ? (
    <>
      <Header />
      <ScrollableHero />
      <section className="h-[115vh]"></section>
      <GetPsyched />
      <section className="h-[115vh]"></section>
      <section className="relative z-10 bg-white">
        <BePsyched />
        <StayPsyched />
        <Vlog />
        <PsychMag />
        <SeaTrees />
        <Partnered />
        <Footer />
      </section>
      <FixedLabel
        title="Maldives"
        subtitleTop="win a trip to the"
        subtitleBottom="with Jamie"
        className="fixed right-0 bottom-20"
      />
    </>
  ) : null
}

export default Landing
