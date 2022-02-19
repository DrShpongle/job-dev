import * as React from 'react'
import Image from 'next/image'

const GetSurfApp: React.FC<any> = ({blok}) => {
  return (
    <section
      className="flex h-screen flex-col items-center justify-center bg-blue py-12 md:py-20 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container flex flex-col items-center justify-center space-y-12 md:space-y-16  lg:space-y-20 xl:space-y-24 2xl:space-y-32">
        <div className="text-center">
          <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
            Get Psyched
          </h3>
          <h2 className="mt-1 text-5xl leading-none text-white md:max-w-md md:text-6xl lg:max-w-xl lg:text-7xl xl:max-w-3xl xl:text-8xl 2xl:max-w-4xl 2xl:text-[111px]">
            the Jamie O’Brien Surf App
          </h2>
        </div>
        <div className="space-y-3">
          <a href="#" className="flex w-28 md:w-44 xl:w-auto">
            <Image
              src="/images/download-on-app-store.svg"
              width={240}
              height={80}
              alt="Download on App Store"
            />
          </a>
          <a href="#" className="flex w-28 md:w-44 xl:w-auto">
            <Image
              src="/images/get-it-on-google-play.svg"
              width={240}
              height={80}
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default GetSurfApp
