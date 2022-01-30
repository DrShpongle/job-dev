import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import HeroWithScrollableText from 'components/sections/surf-app/hero-with-scrolling-text'

const SurfApp: NextPage = () => {
  return (
    <PageLayout>
      <HeroWithScrollableText />
      <section className="h-[100vh] relative bg-green-500/30" />
    </PageLayout>
  )
}

export default SurfApp
