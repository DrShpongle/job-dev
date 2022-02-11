import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react'

const TopTips = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <>
      <section
        className="bg-white py-5 md:py-7 xl:py-8 2xl:py-12"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="container">
          <div className="flex w-full flex-col items-center space-y-5 bg-white px-5 py-8 text-center md:space-y-6 md:py-10 lg:space-y-7 lg:py-12 xl:space-y-8 xl:py-14">
            <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
              Top Tips
            </h2>
            <p className="max-w-4xl md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
              Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
              nem nonsedit, utestiam, sus quia quis doluptio illatem et aut.
            </p>
          </div>
          <div className="mt-4 w-full overflow-hidden md:mt-6 2xl:mt-8">
            <div className="w-[150%] -translate-x-[16.66%]">
              {isMounted ? (
                <Swiper slidesPerView={3} spaceBetween={16} loop>
                  {fakeData.map((item, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className="relative">
                          <Link href={item.href}>
                            <a className="card-gradient relative block aspect-video before:absolute before:inset-0 before:z-[1] before:block before:duration-300 hover-hover:hover:before:opacity-0">
                              <div className="absolute inset-0">
                                <div className="relative h-full w-full">
                                  <Image
                                    src={item.image}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </div>
                              </div>
                            </a>
                          </Link>
                          <div className="mt-6 flex select-none flex-col justify-end md:pointer-events-none md:absolute md:inset-0 md:top-0 md:pb-6">
                            <div className="relative z-10 flex flex-col items-center space-y-2 text-center lg:space-y-3 xl:space-y-4">
                              <h3 className="jsx-5c20e419c03354cd font-headings text-lg leading-none lg:text-2xl lg:leading-none xl:text-3xl xl:leading-none">
                                {item.title}
                              </h3>
                              <p className="jsx-5c20e419c03354cd text-sm lg:text-lg">
                                {item.description}
                              </p>
                              <Link href={item.href}>
                                <a className="jsx-5c20e419c03354cd flex items-center space-x-1 whitespace-nowrap font-headings text-sm text-pink md:text-base lg:text-lg xl:text-xl">
                                  <span className="jsx-5c20e419c03354cd">
                                    Read more
                                  </span>
                                  <span className="jsx-5c20e419c03354cd translate-y-0.5">
                                    &gt;
                                  </span>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopTips

// TODO: substitute the array below with real data
const fakeData = [
  {
    title: 'Jamie’s top tips for beginners',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/fake-data-images/top-tip/1.jpg',
    href: '/',
  },
  {
    title: 'Jamie’s top tips for itermediate surfers',
    description: 'Great everyday bag that you can feel good about using',
    image: '/images/fake-data-images/top-tip/2.jpg',
    href: '/',
  },
  {
    title: 'Jamie’s top tips for advanced surfers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/fake-data-images/top-tip/3.jpg',
    href: '/',
  },
]
