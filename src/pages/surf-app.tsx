import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import HeroWithScrollableText from 'components/sections/surf-app/hero-with-scrolling-text'
import AskJamie from 'components/sections/surf-app/ask-jamie'

const SurfApp: NextPage = () => {
  return (
    <PageLayout>
      <HeroWithScrollableText />
      <section className="h-[300vh] relative" />
      <section style={{transform: 'translate3d(0,0,0)'}}>
        <AskJamie />
      </section>
    </PageLayout>
  )
}

export default SurfApp
