import * as React from 'react'
import {isEmpty} from 'lodash'
import {Swiper, SwiperSlide} from 'swiper/react'

import {getScrolledToAnchor} from 'utils/get-scrolled-to-anchor'
import {getArticlesByCategory} from 'utils/get-articles-by-category'
import Card from 'components/card'

const TopTips = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const [articles, setArticles] = React.useState<any>([])
  React.useEffect(() => {
    getArticlesByCategory('960103db-81c4-4100-a374-27f1785fed32').then((data) =>
      setArticles(data),
    )
  }, [])
  React.useEffect(() => {
    getScrolledToAnchor('top-tips')
  }, [])
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <>
      <section
        className="bg-white pt-5 pb-10 md:py-7 xl:py-8 2xl:py-12"
        id="top-tips"
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
              {isMounted && !isEmpty(articles) ? (
                <Swiper slidesPerView={3} spaceBetween={16} loop>
                  {articles.map((item: any, i: number) => {
                    return (
                      <SwiperSlide key={item.uuid || i}>
                        <Card data={item} forCarousel />
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
