import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import HeroWithScrollableText from 'components/sections/surf-app/hero-with-scrolling-text'
import AskJamie from 'components/sections/surf-app/ask-jamie'
import LearnFromTheBest from 'components/sections/surf-app/learn-from-the-best'
import VisualiseAndDo from 'components/sections/surf-app/visualise-and-do'
import FullyLoaded from 'components/sections/surf-app/fully-loaded'

const SurfApp: NextPage = () => {
  return (
    <PageLayout>
      <HeroWithScrollableText />
      <section className="h-[250vh]" />
      <AskJamie />
      <LearnFromTheBest />
      <section className="h-[200vh]" />
      <VisualiseAndDo />
      <section className="h-[200vh]" />
      <FullyLoaded />
    </PageLayout>
  )
}

export default SurfApp
