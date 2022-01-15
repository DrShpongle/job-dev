import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

const TotallyPsyched = () => {
  return (
    <div className="w-full py-12 xl:py-32">
      <Image
        src="/images/iphone-animation.gif"
        width={1123}
        height={567}
        layout="responsive"
      />
      <div className="container">
        <div className="flex flex-col items-center">
          <h3 className="font-accented text-pink mt-6 text-[32px] md:text-4xl lg:text-5xl xl:text-[70px] text-center">
            Totally psyched!
          </h3>
          <h2 className="mt-2 text-5xl text-center font-headings md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            What are you waiting for?!
          </h2>
          <div className="max-w-[830px] flex flex-col items-center space-y-10 xl:space-y-20 text-center text-xl xl:text-[34px] xl:leading-normal mt-9">
            <p>
              Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
              nem nonsedit, utestiam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="flex w-36 md:w-48 lg:w-56">
                <Image
                  src="/images/download-on-app-store.svg"
                  width={240}
                  height={80}
                  alt="Download on App Store"
                />
              </a>
              <a href="#" className="flex w-36 md:w-48 lg:w-56">
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
    </div>
  )
}

export default TotallyPsyched
