import * as React from 'react'
import {isEmpty} from 'lodash'
import classNames from 'classnames'

import Hero from './hero'
// import FeaturedArticle from './featured-article'
// import Articles from './articles'

import {
  //   getAllArticles,
  getArticlesByCategory,
  getArticlesAmount,
  //   getAllArticlesByCategory,
} from 'utils/get-articles'

const PER_PAGE = 6

const categoryIdFeatures = '3a74027d-ae5a-49ca-82aa-a4a13a017d9c'
const categoryIdVlog = 'dd9b6f76-022d-4d6a-bc70-11e806944a0a'
const categoryIdTopTips = '960103db-81c4-4100-a374-27f1785fed32'
const categoryIdGear = 'a95f141f-d357-43c2-94ae-93dea86ec306'
const categoryIdTravelGuides = '44efe4b4-1add-435c-bb18-16fdb7823dfb'

const PsychMagPageContent: React.FC<any> = ({blok}) => {
  const [currentCategory, setCurrentCategory] = React.useState<string>('all')
  const [articles, setArticles] = React.useState<any>([])
  const [articlesAmount, setArticlesAmount] = React.useState<any>()
  const [pageNumber, setPageNumber] = React.useState<number>(1)

  React.useEffect(() => {
    // if (currentCategory === 'any') {
    getArticlesByCategory(currentCategory, PER_PAGE, 1).then((data) =>
      setArticles(data),
    )
    getArticlesAmount(currentCategory).then((data) => {
      setArticlesAmount(+data.headers.total)
    })
    // }
  }, [])

  //   console.log('currentCategory:', currentCategory)
  //   console.log('articles:', articles)
  //   console.log('articlesAmount:', articlesAmount)
  //   console.log('pageNumber:', pageNumber)

  return (
    <>
      <div className="fixed top-[80px] z-10 w-full bg-pink">
        <div className="container">
          <div className="flex h-[44px] items-center space-x-6">
            {filters.map((item, i) => (
              <button
                key={i}
                className={classNames(
                  currentCategory === item.categorySlug
                    ? 'text-blue'
                    : 'text-white',
                )}
                onClick={() => {
                  //   if (currentCategory !== item.categorySlug) {
                  setCurrentCategory(item.categoryId)
                  setPageNumber(1)
                  getArticlesByCategory(item.categoryId, PER_PAGE, 1).then(
                    (data) => setArticles(data),
                  )
                  getArticlesAmount(item.categoryId).then((data) =>
                    setArticlesAmount(+data.headers.total),
                  )
                  //   }
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
            {articles.map((article: any, i: number) => (
              <div key={i}>{article.content.title}</div>
            ))}
            {/* {articlesAmount / PER_PAGE > pageNumber ? ( */}
            <button
              onClick={() => {
                // if (sortedBy !== 'any') {
                getArticlesByCategory(
                  currentCategory,
                  PER_PAGE,
                  pageNumber + 1,
                ).then((data) => {
                  setPageNumber(pageNumber + 1)
                  setArticles([...articles, ...data])
                  setArticlesAmount(data.length)
                })
                // }
              }}
            >
              more
            </button>
            {/* ) : null} */}
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
    categorySlug: 'all',
    categoryId: 'all',
  },
  {
    title: 'features',
    categorySlug: 'features',
    categoryId: categoryIdFeatures,
  },
  {
    title: 'vlog',
    categorySlug: 'vlog',
    categoryId: categoryIdVlog,
  },
  {
    title: 'top tips',
    categorySlug: 'top-tips',
    categoryId: categoryIdTopTips,
  },
  {
    title: 'gear',
    categorySlug: 'gear',
    categoryId: categoryIdGear,
  },
  {
    title: 'travel guides',
    categorySlug: 'travel-guides',
    categoryId: categoryIdTravelGuides,
  },
]
