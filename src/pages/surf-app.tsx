import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import HeroWithScrollableText from 'components/sections/surf-app/hero-with-scrolling-text'
import Vlog from 'components/sections/home/vlog'

const SurfApp: NextPage = () => {
  return (
    <PageLayout>
      <HeroWithScrollableText />
      <section className="h-[100vh] relative" />
      <section className="relative z-10 bg-white">
        <Vlog />
      </section>
    </PageLayout>
  )
}

export default SurfApp
