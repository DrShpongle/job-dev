import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'

import ScrollableHero from 'components/sections/home/scrollable-hero'
import GetPsyched from 'components/sections/home/get-psyched'

import BePsyched from 'components/sections/home/be-psyched'
import StayPsyched from 'components/sections/home/stay-psyched'
import Vlog from 'components/sections/home/vlog'
import PsychMag from 'components/sections/home/psych-mag'
import SeaTrees from 'components/sections/home/sea-trees'

const Landing: NextPage = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted ? (
    <>
      <PageLayout>
        <ScrollableHero />
        <section className="h-[115vh]" />
        <GetPsyched />
        <section className="h-[115vh]" />
        <section className="relative z-10 bg-white">
          <BePsyched />
          <StayPsyched />
          <Vlog />
          <PsychMag />
          <SeaTrees />
        </section>
      </PageLayout>
    </>
  ) : null
}

export default Landing
