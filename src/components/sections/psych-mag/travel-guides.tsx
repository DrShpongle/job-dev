import * as React from 'react'
import {isEmpty} from 'lodash'

import {getScrolledToAnchor} from 'utils/get-scrolled-to-anchor'
import {getArticlesByCategory} from 'utils/get-articles-by-category'
import Card from 'components/card'

const TravelGuides = () => {
  const [articles, setArticles] = React.useState<any>([])
  const [itemsToShow, setItemsToShow] = React.useState<number>(2)
  React.useEffect(() => {
    getArticlesByCategory('44efe4b4-1add-435c-bb18-16fdb7823dfb').then((data) =>
      setArticles(data),
    )
  }, [])
  React.useEffect(() => {
    getScrolledToAnchor('travel-guides')
  }, [])
  return (
    <section
      className="bg-blue pb-5 pt-12 md:pb-7 md:pt-20 lg:py-36"
      id="travel-guides"
    >
      <div className="container">
        <div className="flex w-full flex-col items-center space-y-5 text-center text-white md:space-y-6 lg:space-y-7 xl:space-y-8">
          <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            Travel Guides
          </h2>
          <p className="max-w-4xl md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
            Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae nem
            nonsedit, utestiam, sus quia quis doluptio illatem et aut.
          </p>
        </div>
        <div className="mt-10 space-y-5 md:mt-16 md:space-y-7 xl:mt-20">
          {!isEmpty(articles) &&
            articles.slice(0, itemsToShow).map((item: any, i: number) => {
              return <Card key={item.uuid || i} data={item} />
            })}
        </div>
        {itemsToShow < articles.length && (
          <button
            onClick={() => setItemsToShow(itemsToShow + 2)}
            className="mt-5 flex h-11 w-full items-center justify-center rounded-sm bg-pink font-headings uppercase text-white duration-150 md:mt-6 md:h-12 md:text-lg lg:mt-7 lg:h-14 lg:text-xl hover-hover:hover:bg-white hover-hover:hover:text-pink"
          >
            More features
          </button>
        )}
      </div>
    </section>
  )
}

export default TravelGuides
