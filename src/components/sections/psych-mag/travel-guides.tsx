import * as React from 'react'
import {isEmpty} from 'lodash'

import {getScrolledToAnchor} from 'utils/get-scrolled-to-anchor'
import {getArticlesByCategory} from 'utils/get-articles-by-category'
import Card from 'components/card'

const TravelGuides = ({blok}: any) => {
  const [articles, setArticles] = React.useState<any>([])
  const [itemsToShow, setItemsToShow] = React.useState<number>(4)
  React.useEffect(() => {
    getArticlesByCategory('44efe4b4-1add-435c-bb18-16fdb7823dfb').then((data) =>
      setArticles(data),
    )
  }, [])
  React.useEffect(() => {
    getScrolledToAnchor('travel-guides')
  }, [])
  return (
    <section className="py-5 md:py-7" id="travel-guides">
      <div className="container">
        <div className="flex w-full flex-col items-center space-y-5 bg-white px-5 py-8 text-center md:space-y-6 md:py-10 lg:space-y-7 lg:py-12 xl:space-y-8 xl:py-14">
          <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            {blok.title}
          </h2>
          <p className="max-w-4xl md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
            {blok.subtitle}
          </p>
        </div>
        <div className="mt-5 grid gap-5 md:mt-7 md:grid-cols-2 md:gap-7">
          {!isEmpty(articles) &&
            articles.slice(0, itemsToShow).map((item: any, i: number) => {
              return <Card key={item.uuid || i} data={item} />
            })}
        </div>
        {itemsToShow < articles.length && (
          <button
            onClick={() => setItemsToShow(itemsToShow + 4)}
            className="mt-5 flex h-11 w-full items-center justify-center rounded-sm bg-pink font-headings uppercase text-white duration-150 md:mt-6 md:h-12 md:text-lg lg:mt-7 lg:h-14 lg:text-xl hover-hover:hover:bg-blue"
          >
            More features
          </button>
        )}
      </div>
    </section>
  )
}

export default TravelGuides
