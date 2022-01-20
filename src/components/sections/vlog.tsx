import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import VideoPlayer from 'components/video-player'

const Vlog = () => {
  return (
    <div className="pt-12 xl:py-24">
      <div className="container">
        <div className="relative overflow-hidden">
          <div className="absolute w-full">
            <VideoPlayer
              url="https://www.w3schools.com/html/mov_bbb.mp4"
              controls={true}
              controlsClasses="bottom-32 right-16"
            />
          </div>
          <div className="relative flex">
            <Image
              src="/images/iphone-frame-landscape.png"
              width={1835}
              height={909}
              alt="Jamie O'Brien"
              priority
            />
          </div>
        </div>
        <div className="flex mt-12 flex-nowrap xl:mt-28">
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
    </div>
  )
}

export default Vlog
