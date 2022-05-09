import * as React from 'react'
import type {NextPage} from 'next'
import Link from 'next/link'

import Header from 'components/header'
import Partnered from 'components/sections/partnered'
import Footer from 'components/footer'

import ImageWithBlur from 'components/image-with-blur'

const Page404: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="relative flex h-[75vh] w-full items-center justify-center lg:h-[85vh]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:z-10 before:bg-black/20">
          <ImageWithBlur
            src="/images/404.webp"
            layout="fill"
            objectFit="cover"
            priority
            alt="waves"
            className="object-bottom"
          />
        </div>
        <div className="z-10 flex flex-col items-center space-y-7 md:space-y-8 lg:space-y-10 xl:space-y-12">
          <h2 className="text-5xl leading-none text-white md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            404
          </h2>
          <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
            page not found
          </h3>
          <Link href="/">
            <a className="rounded-full bg-blue px-5 py-3 font-headings text-xl uppercase text-white duration-150 md:px-6 md:py-4 md:text-2xl hover-hover:hover:bg-white hover-hover:hover:text-blue">
              take me home
            </a>
          </Link>
        </div>
      </div>
      <div style={{transform: 'translate3d(0,0,0)'}}>
        <Partnered />
        <Footer />
      </div>
    </div>
  )
}

export default Page404
