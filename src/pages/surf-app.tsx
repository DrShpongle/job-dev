import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import HeroWithScrollableText from 'components/sections/surf-app/hero-with-scrolling-text'
import AskJamie from 'components/sections/surf-app/ask-jamie'

const SurfApp: NextPage = () => {
  return (
    <PageLayout>
      <HeroWithScrollableText />
      <section className="h-[200vh] relative" />
      <section className="relative z-10 bg-white">
        <AskJamie />
      </section>
    </PageLayout>
  )
}

export default SurfApp
