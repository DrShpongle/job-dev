import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import VideoPlayer from 'components/video-player'

const Vlog = () => {
  return (
    <section className="relative z-10 py-12 bg-white xl:py-24">
      <div className="container">
        <div className="relative flex justify-center overflow-hidden">
          <div className="relative max-w-xs md:max-w-none">
            <div className="absolute bottom-9 w-[280px] md:bottom-[74px] md:w-[610px] lg:bottom-24 lg:w-[830px] xl:bottom-32 xl:w-[1040px] 2xl:bottom-32 2xl:w-[1110px]">
              <VideoPlayer
                url="https://mytwynmediaservices-euno.akamaized.net/5eb305fa-6b14-4ebe-ad83-981f7a9c979e/5eb305fa-6b14-4ebe-ad83-981f7a9c.ism/manifest(format=m3u8-aapl).m3u8"
                controls={true}
                controlsClasses="bottom-4 right-12 md:bottom-8 md:right-24 lg:bottom-14 lg:right-36 xl:bottom-16 xl:right-44"
              />
            </div>
            <Image
              src="/images/tv-frame.png"
              width={1283}
              height={1118}
              alt="Jamie O'Brien"
              priority
            />
          </div>
        </div>
        <div className="flex mt-3 md:mt-3 flex-nowrap lg:mt-4 xl:mt-10 2xl:mt-16">
          <div className="w-2/5 text-center">
            <h3 className="font-headings leading-none text-5xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-[111px] ">
              vlog.
            </h3>
          </div>
          <div className="flex justify-center w-3/5">
            <div className="flex flex-col w-10/12 space-y-8">
              <p className="md:text-xl lg:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
                The latest updated direct from Jamie. Vel escipsamusae nem
                nonsedit, utestiam, sus quia quis doluptio illatem et aut.
              </p>
              <Link href="/surf-mag">
                <a className="self-start px-6 xl:px-10 py-2 md:py-4 text-white uppercase rounded-full bg-pink font-headings md:text-xl lg:text-lg xl:text-2xl 2xl:text-[29px]">
                  More with Jamie
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vlog
