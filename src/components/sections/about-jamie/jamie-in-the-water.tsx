import * as React from 'react'
import Image from 'next/image'

const JamieInTheWater = () => {
  return (
    <section
      className="bg-white py-12 md:py-20 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <div className="flex flex-col items-end">
          <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
            Get Psyched
          </h3>
          <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            sus quia quis doluptio
          </h2>
          <p className="mt-4 md:mt-8 md:text-xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl">
            Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae nem
            nonsedit, utestiam, sus quia quis doluptio illatem et aut optat quam
            nam nimagnis doloreh enistorro vendis voluptaqua.
            <br />
            <br />
            Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae nem
            nonsedit, utestiam, sus quia quis doluptio illatem et aut optat quam
            nam nimagnis doloreh enistorro vendis voluptaqua.
          </p>
        </div>
        <div className="mt-8 flex">
          <Image
            src="/images/jamie-in-the-water.jpg"
            width={1920}
            height={1078}
          />
        </div>
      </div>
    </section>
  )
}

export default JamieInTheWater
