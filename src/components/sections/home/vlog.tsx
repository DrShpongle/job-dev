import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {sbEditable} from '@storyblok/storyblok-editable'

import VideoPlayer from 'components/video-player'

const Vlog: React.FC<any> = ({blok}) => {
  return (
    <section
      className="bg-white py-12 md:py-20 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
      {...sbEditable(blok)}
      key={blok._uid}
    >
      <div className="container">
        <div className="relative flex justify-center overflow-hidden">
          <div className="relative h-[285px] max-w-xs md:h-[606px] md:max-w-[960px] lg:h-[830px]">
            <div className="absolute bottom-9 w-[280px] md:bottom-[74px] md:w-[610px] lg:bottom-20 lg:w-[830px]">
              <VideoPlayer
                url={blok.video_url.url}
                controls={true}
                controlsClasses="bottom-4 right-12 md:bottom-8 md:right-24 lg:bottom-14 lg:right-36 xl:bottom-16 xl:right-44"
              />
            </div>
            <Image
              src="/images/tv-frame.png"
              width={1283}
              height={1118}
              alt="tv frame"
              // priority
            />
          </div>
        </div>
        <div className="mt-3 flex flex-nowrap md:mt-3 lg:mt-4 xl:mt-10 2xl:mt-16">
          <div className="w-2/5 text-center">
            <h3 className="font-headings text-5xl leading-none md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-[111px] ">
              {blok.title}
            </h3>
          </div>
          <div className="flex w-3/5 justify-center">
            <div className="flex w-10/12 flex-col space-y-8">
              <p className="md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
                {blok.description}
              </p>
              <Link href="/psych-mag">
                <a className="self-start rounded-full bg-pink px-6 py-2 font-headings uppercase text-white duration-150 md:py-4 md:text-xl lg:text-lg xl:px-10 xl:text-2xl 2xl:text-[29px] hover-hover:hover:bg-blue">
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
