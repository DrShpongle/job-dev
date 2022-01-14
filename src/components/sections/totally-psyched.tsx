import React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

const TotallyPsyched = () => {
  return (
    <div className="w-full py-32">
      <Image
        src="/images/iphone-animation.gif"
        width={1123}
        height={567}
        layout="responsive"
      />
      <div className="container">
        <div className="flex flex-col items-center">
          <h3 className="font-accented text-pink text-[70px]">
            Totally psyched!
          </h3>
          <h2 className="font-headings text-[111px]">
            What are you waiting for?!
          </h2>
          <div className="max-w-[830px] flex flex-col items-center space-y-20 text-center text-[34px] mt-9">
            <p>
              Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
              nem nonsedit, utestiam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="">
                <Image
                  src="/images/download-on-app-store.svg"
                  width={240}
                  height={80}
                />
              </a>
              <a href="#" className="">
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
    </div>
  )
}

export default TotallyPsyched
