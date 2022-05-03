import * as React from 'react'
import classNames from 'classnames'
import {isEmpty} from 'lodash'

import Hero from './hero'
import FeaturedArticle from './featured-article'
import Articles from './articles'

import {getArticlesByCategory, getArticlesAmount} from 'utils/get-articles'

const PER_PAGE = 6
const INITIAL_CATEGORY = 'all'

const PsychMagPageContent: React.FC<any> = ({blok}) => {
  const [currentCategory, setCurrentCategory] =
    React.useState<string>(INITIAL_CATEGORY)
  const [articles, setArticles] = React.useState<any>([])
  const [articlesAmount, setArticlesAmount] = React.useState<any>()
  const [pageNumber, setPageNumber] = React.useState<number>(1)

  const canLoadMore = articlesAmount > PER_PAGE * pageNumber

  React.useEffect(() => {
    getArticlesByCategory(currentCategory, PER_PAGE, 1).then((data) =>
      setArticles(data),
    )
    getArticlesAmount(currentCategory).then((data) => {
      setArticlesAmount(+data.headers.total)
    })
  }, [currentCategory])

  const handlerLoadMore = () => {
    getArticlesByCategory(currentCategory, PER_PAGE, pageNumber + 1).then(
      (data) => {
        setPageNumber(pageNumber + 1)
        setArticles([...articles, ...data])
      },
    )
  }

  return (
    <>
      <div className="fixed top-10 z-10 w-full bg-pink md:top-20">
        <div className="container">
          <div className="flex h-[44px] items-center space-x-7 font-headings text-lg uppercase text-white">
            <div>filter by category:</div>
            {filters.map((item, i) => (
              <button
                key={i}
                className={classNames(
                  'uppercase',
                  currentCategory === item.categoryId
                    ? 'text-blue'
                    : 'text-white',
                )}
                onClick={() => {
                  if (item.categoryId && currentCategory !== item.categoryId) {
                    setCurrentCategory(item.categoryId)
                    setPageNumber(1)
                    // TODO
                    // getArticlesByCategory(item.categoryId, PER_PAGE, 1).then(
                    //   (data) => setArticles(data),
                    // )
                    // getArticlesAmount(item.categoryId).then((data) =>
                    //   setArticlesAmount(+data.headers.total),
                    // )
                  }
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-white pt-24 md:pt-28 lg:pt-48">
        <Hero title={blok.title} subtitle={blok.subtitle} />
        <FeaturedArticle article={{}} />
        {isEmpty(articles) ? (
          <h2 className="my-32 text-center text-5xl">
            Sorry, there are no articles that belong to this filter
            yet&nbsp;&nbsp;👻
          </h2>
        ) : (
          <Articles
            articles={articles}
            handlerLoadMore={handlerLoadMore}
            canLoadMore={canLoadMore}
          />
        )}
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
