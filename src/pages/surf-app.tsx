import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import HeroWithScrollableText from 'components/sections/surf-app/hero-with-scrolling-text'

const SurfApp: NextPage = () => {
  return (
    <>
      <HeroWithScrollableText />
      <section className="h-[100vh]" />
      <section className="h-[100vh] bg-green-500 relative" />
    </>
    // <PageLayout>
    //   <HeroWithScrollableText />
    //   <section className="h-[100vh]" />
    // </PageLayout>
  )
}

export default SurfApp
