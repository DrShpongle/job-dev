import * as React from 'react'
import classNames from 'classnames'
import {isEmpty} from 'lodash'

import Hero from './hero'
// import FeaturedArticle from './featured-article'
// import Articles from './articles'

import {getArticlesByCategory, getArticlesAmount} from 'utils/get-articles'

const PER_PAGE = 6

const PsychMagPageContent: React.FC<any> = ({blok}) => {
  const [currentCategory, setCurrentCategory] = React.useState<string>('all')
  const [articles, setArticles] = React.useState<any>([])
  const [articlesAmount, setArticlesAmount] = React.useState<any>()
  const [pageNumber, setPageNumber] = React.useState<number>(1)

  React.useEffect(() => {
    getArticlesByCategory(currentCategory, PER_PAGE, 1).then((data) =>
      setArticles(data),
    )
    getArticlesAmount(currentCategory).then((data) => {
      setArticlesAmount(+data.headers.total)
    })
  }, [])

  return (
    <>
      <div className="fixed top-[80px] z-10 w-full bg-pink">
        <div className="container">
          <div className="flex h-[44px] items-center space-x-6">
            {filters.map((item, i) => (
              <button
                key={i}
                className={classNames(
                  currentCategory === item.categoryId
                    ? 'text-blue'
                    : 'text-white',
                )}
                onClick={() => {
                  if (item.categoryId && currentCategory !== item.categoryId) {
                    setCurrentCategory(item.categoryId)
                    setPageNumber(1)
                    getArticlesByCategory(item.categoryId, PER_PAGE, 1).then(
                      (data) => setArticles(data),
                    )
                    getArticlesAmount(item.categoryId).then((data) =>
                      setArticlesAmount(+data.headers.total),
                    )
                  }
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-white pt-20 pb-4 md:pt-28 md:pb-6 lg:pt-36 xl:pb-8">
        <div className="container">
          <div className="space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
            <h1 className="text-center text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
              {blok.title}
            </h1>
            <p className="mx-auto max-w-4xl text-center md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
              {blok.subtitle}
            </p>
            {!isEmpty(articles) &&
              articles.map((article: any, i: number) => (
                <div key={i}>{article.content.title}</div>
              ))}
            {articlesAmount > PER_PAGE * pageNumber ? (
              <button
                onClick={() => {
                  getArticlesByCategory(
                    currentCategory,
                    PER_PAGE,
                    pageNumber + 1,
                  ).then((data) => {
                    setPageNumber(pageNumber + 1)
                    setArticles([...articles, ...data])
                  })
                }}
              >
                more
              </button>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}

export default PsychMagPageContent

const filters = [
  {
    title: 'all',
    categoryId: 'all',
  },
  {
    title: 'features',
    categoryId: process.env.NEXT_PUBLIC_CATEGORY_ID_FEATURES,
  },
  {
    title: 'vlog',
    categoryId: process.env.NEXT_PUBLIC_CATEGORY_ID_VLOG,
  },
  {
    title: 'top tips',
    categoryId: process.env.NEXT_PUBLIC_CATEGORY_ID_TOP_TIPS,
  },
  {
    title: 'gear',
    categoryId: process.env.NEXT_PUBLIC_CATEGORY_ID_GEAR,
  },
  {
    title: 'travel guides',
    categoryId: process.env.NEXT_PUBLIC_CATEGORY_ID_TRAVEL_GUIDES,
  },
]
