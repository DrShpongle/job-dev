import * as React from 'react'
import {isEmpty} from 'lodash'

import FiltersBar from './filters-bar'
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
    setPageNumber(1)
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
      <FiltersBar
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <section className="bg-white pt-24 md:pt-36 lg:pt-48">
        <Hero title={blok.title} subtitle={blok.subtitle} />
        <FeaturedArticle article={{}} />
        {isEmpty(articles) ? (
          <div className="container">
            <h2 className="my-16 text-center text-3xl md:my-32 md:text-4xl xl:text-5xl">
              Sorry, there are no articles that belong to this filter
              yet&nbsp;&nbsp;👻
            </h2>
          </div>
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
