import * as React from 'react'
import type {NextPage} from 'next'
import Image from 'next/image'

import PageLayout from 'components/layouts/page-layout'
import VideoPlayer from 'components/video-player'

const SeaTrees: NextPage = () => {
  return (
    <PageLayout>
      <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="/images/sea-trees-hero.jpg"
              width={1920}
              height={999}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex 2xl:h-[329px] 2xl:w-[372px]">
          <Image src="/images/sea-trees-logo.png" width={372} height={329} />
        </div>
      </section>
      <section
        className="bg-white py-12 md:py-20 xl:py-24"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="container">
          <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
            Sustainable surf
          </h3>
          <h2 className="mt-1 text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            SeaTrees regenerates
            <br /> ocean health globally
          </h2>
          <p className="mt-4 md:mt-8 md:text-xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl">
            The ocean contains 90% of the carbon in the global carbon cycle.
            It’s super power is to sequester more CO2 than any other ecosystem
            on Earth. But it needs our help to be more heroic and effective.
            <br />
            <br />
            We need more people to protect and restore ocean health. Threats
            like climate change and ocean acidification are accelerating faster
            than ever before in geologic history. Humanity must rise to meet
            that threat.
          </p>
          <div className="mt-8 aspect-video md:mt-16 xl:mt-20 2xl:mt-24">
            <VideoPlayer url="https://www.youtube.com/watch?v=I0KgGtwaudQ&t=20s" />
          </div>

          <div className="mt-8 flex flex-col items-end space-y-8 text-right md:mt-16 md:space-y-12 lg:space-y-12 xl:mt-20 xl:space-y-16 2xl:mt-24">
            <p className="mt-4 md:mt-8 md:text-xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl">
              SeaTrees creates connections between people and brands that are
              ready to meet this challenge, and the social entrepreneurs and
              scientists who know how to regenerate ecosystems but struggle for
              funding and recognition.
              <br />
              <br />
              Through a combination of indigenous wisdom, modern science and
              inspired business, we can speed up the Earth’s natural healing
              mechanisms to repair our planet in real-time. We will also create
              jobs and livelihoods that maintain healthy ecosystems for the
              future.
            </p>
            <a
              href="https://sea-trees.org/"
              target="_blank"
              className="rounded-full bg-pink py-2 px-6 font-headings text-lg uppercase text-white md:py-3 md:text-xl lg:px-8 lg:text-2xl xl:px-10 xl:text-3xl"
            >
              visit the seatrees website
            </a>
          </div>
        </div>
        <div className="relative mt-8 flex h-[85vh] w-full md:mt-12 xl:mt-16 2xl:mt-20">
          <Image
            src="/images/sea-trees-palms.jpg"
            width={1920}
            height={1078}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </PageLayout>
  )
}

export default SeaTrees
