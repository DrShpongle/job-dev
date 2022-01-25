import * as React from 'react'
import type {NextPage} from 'next'

import ScrollableHero from 'components/sections/scrollable-hero'

import VideoEmbed from 'components/video-embed'

const Landing: NextPage = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted ? (
    <div className="relative min-h-screen">
      <ScrollableHero />
      <section className="h-screen"></section>
      <section className="sticky top-0 h-screen overflow-hidden bg-green-500">
        <VideoEmbed
          src="/videos/get-psyched.mp4"
          className="absolute bottom-0 z-[-1] w-auto h-full"
        />
      </section>
      <section className="h-screen"></section>
      <section className="relative h-screen bg-green-500"></section>
    </div>
  ) : null
}

export default Landing
