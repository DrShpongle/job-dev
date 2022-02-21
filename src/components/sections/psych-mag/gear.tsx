import * as React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'

import {getScrolledToAnchor} from 'utils/get-scrolled-to-anchor'
import Card from 'components/card'

const Gear = () => {
  React.useEffect(() => {
    getScrolledToAnchor()
  })
  return (
    <>
      <section
        className="bg-slate-100 py-12 md:bg-white md:py-20 xl:py-24"
        id="gear"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="container">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center space-y-5 px-5 text-center md:space-y-6 lg:w-1/2 lg:space-y-7 xl:space-y-8">
              <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
                Gear
              </h2>
              <p className="max-w-4xl md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
                Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
                nem nonsedit, utestiam, sus quia quis doluptio illatem et aut.
              </p>
            </div>
            <div className="relative flex w-full items-center px-12 md:px-16 lg:w-1/2 lg:px-14 2xl:px-24">
              <button className="gear-swiper-button-prev swiper-button-prev pointer absolute left-0 top-14 z-10 h-0 w-0 border-solid md:top-auto" />
              <button className="gear-swiper-button-next swiper-button-next pointer absolute right-0 top-14 z-10 h-0 w-0 border-solid md:top-auto" />
              <div className="h-full w-full">
                test
                {/* <Swiper
                  spaceBetween={16}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.gear-swiper-button-next',
                    prevEl: '.gear-swiper-button-prev',
                  }}
                  modules={[Navigation]}
                  loop
                >
                  {fakeData.map((item, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <Card
                          key={i}
                          data={item}
                          forCarousel
                          aspectRatio="aspect-video lg:aspect-[4/3]"
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gear

// TODO: substitute the array below with real data

const fakeData = [
  {
    title: 'best tube riders of all time',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'features',
    image: '/images/fake-data-images/psych-mag/1.png',
    href: '/',
  },
  {
    title: 'the deep blue bag',
    description: 'Great everyday bag that you can feel good about using',
    category: 'gear',
    image: '/images/fake-data-images/psych-mag/2.png',
    href: '/',
  },
  {
    title: '5 all female surf films you need to watch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'features',
    image: '/images/fake-data-images/psych-mag/3.png',
    href: '/',
  },
  {
    title: 'top 5 eco-friendly wetsuits',
    description: 'Great everyday bag that you can feel good about using',
    category: 'gear',
    image: '/images/fake-data-images/psych-mag/4.png',
    href: '/',
  },
  {
    title: 'best presents for surfers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'gear',
    image: '/images/fake-data-images/psych-mag/5.png',
    href: '/',
  },
  {
    title: 'health benefits of surfing',
    description: 'Great everyday bag that you can feel good about using',
    category: 'features',
    image: '/images/fake-data-images/psych-mag/6.png',
    href: '/',
  },
]
