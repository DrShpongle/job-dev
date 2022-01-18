import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const JamieInYourPocket = () => {
  const refPhoneFrame = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgress(refPhoneFrame, 300)
  const {scrollYProgress} = useViewportScroll()
  const rangeY = useTransform(scrollYProgress, [start, end], ['100%', '35%'])
  return (
    <div className="relative pt-40 overflow-hidden">
      <VideoEmbed
        src="https://cdn.videvo.net/videvo_files/video/free/2017-08/large_watermarked/170724_15_Setangibeach_preview.mp4"
        className="absolute bottom-0 z-[-1] w-auto h-full"
      />
      <div className="container">
        <div className="flex flex-nowrap">
          <div className="w-2/3">
            <h3 className="text-pink text-[70px] font-accented">Get Psyched</h3>
            <div className="max-w-[44rem]">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
                with Jamie in your pocket
              </h2>
              <p className="mt-12 text-[34px] leading-normal">
                Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
                nem nonsedit, utestiam, sus quia quis doluptio illatem et aut
                optat quam nam nimagnis doloreh enistorro vendis voluptaqua.
              </p>
            </div>
            <div
              ref={refPhoneFrame}
              className="flex items-center mt-8 space-x-10 xl:pb-[700px] 2xl:pb-[800px]"
            >
              <button className="px-10 py-4 text-white uppercase rounded-full bg-pink font-headings text-lg md:text-xl xl:text-[29px]">
                Download App
              </button>
              <a
                href="#"
                className="flex items-center space-x-1 text-[29px] text-pink font-headings"
              >
                <span>Learn more</span>
                <span className="translate-y-0.5">&#62;</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center w-1/3">
            <div className="flex flex-col space-y-3">
              <a href="#" className="">
                <Image
                  src="/images/download-on-app-store.svg"
                  width={240}
                  height={80}
                  alt="Download on App Store"
                />
              </a>
              <a href="#" className="">
                <Image
                  src="/images/get-it-on-google-play.svg"
                  width={240}
                  height={80}
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        style={{y: rangeY}}
        initial={{y: '90%'}}
        className="xl:w-[540px] 2xl:w-[640px] absolute mx-auto bottom-0 left-0 right-0 translate-y-1/2 flex justify-center"
      >
        <Image
          src="/images/iphone-frame.png"
          width={909}
          height={1835}
          alt="Jamie O'Brien"
          priority
        />
        <div className="absolute w-[430px] top-56">
          <Image
            src="/images/job-app-logo.png"
            width={867}
            height={664}
            layout="responsive"
            alt="Jamie O'Brien"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default JamieInYourPocket
