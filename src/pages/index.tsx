import React from 'react'
import type {NextPage} from 'next'
import Image from 'next/image'

import PageLayout from 'components/layouts/page-layout'
import ScrollableHero from 'components/sections/scrollable-hero'
import SeaTrees from 'components/sections/sea-trees'
import VideoEmbed from 'components/video-embed'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className="max-w-[1980px] mx-auto">
        <ScrollableHero />

        <div className="relative pt-40 overflow-hidden">
          <VideoEmbed
            src="https://cdn.videvo.net/videvo_files/video/free/2017-08/large_watermarked/170724_15_Setangibeach_preview.mp4"
            className="absolute bottom-0 z-[-1] w-auto h-full"
          />
          <div className="container pb-[1000px]">
            <div className="flex flex-nowrap">
              <div className="w-2/3">
                <h3 className="text-pink text-[70px] font-accented">
                  Get Psyched
                </h3>
                <div className="max-w-[44rem]">
                  <h2 className="text-[111px] leading-none">
                    with Jamie in your pocket
                  </h2>
                  <p className="mt-12 text-[34px] leading-normal">
                    Expliqua sitibusa pe nullest, velitiust porerum vel
                    escipsamusae nem nonsedit, utestiam, sus quia quis doluptio
                    illatem et aut optat quam nam nimagnis doloreh enistorro
                    vendis voluptaqua.
                  </p>
                </div>
                <div className="flex items-center mt-8 space-x-7">
                  <button className="px-10 py-3 text-white uppercase rounded-full bg-pink font-headings text-[29px]">
                    Download App
                  </button>
                  <a
                    href="/"
                    className="flex items-center space-x-1 text-[29px] text-blue font-headings"
                  >
                    <span>Learn more</span>
                    <span className="translate-y-0.5">&#62;</span>
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-1/3">
                <div className="flex flex-col space-y-3">
                  <a href="/" className="">
                    <Image
                      src="/images/download-on-app-store.svg"
                      width={240}
                      height={80}
                    />
                  </a>
                  <a href="/" className="">
                    <Image
                      src="/images/get-it-on-google-play.svg"
                      width={240}
                      height={80}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[640px] h-[1292px] absolute mx-auto bottom-0 left-0 right-0 translate-y-1/2 flex justify-center">
            <Image src="/images/iphone-frame.png" width={909} height={1835} />
            <div className="absolute w-[430px] top-56">
              <Image src="/images/job-app-logo.png" width={867} height={664} />
            </div>
          </div>
        </div>
        <SeaTrees />
      </div>
    </PageLayout>
  )
}

export default Home
