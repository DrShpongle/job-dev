import * as React from 'react'
import {useRouter} from 'next/router'
import {isEmpty} from 'lodash'

import FiltersBar from './filters-bar'
import Hero from './hero'
import FeaturedArticle from './featured-article'
import Articles from './articles'

import {getArticlesByCategory, getArticlesAmount} from 'utils/get-articles'

const PER_PAGE = 6

const PsychMagPageContent: React.FC<any> = ({blok}) => {
  const router = useRouter()
  const currentCategory = router.query.filter || 'all'
  const [firstArticles, setFirstArticles] = React.useState<any>([])
  const [articles, setArticles] = React.useState<any>([])
  const [articlesAmount, setArticlesAmount] = React.useState<any>()
  const [pageNumber, setPageNumber] = React.useState<number>(2)
  const [isFetching, setIsFetching] = React.useState<boolean>(false)

  const canLoadMore = articlesAmount > PER_PAGE * pageNumber

  React.useEffect(() => {
    setPageNumber(2)
    getArticlesByCategory(currentCategory as string, PER_PAGE, 1).then((data) =>
      setFirstArticles(data),
    )
    getArticlesByCategory(currentCategory as string, PER_PAGE, 2).then((data) =>
      setArticles(data),
    )
    getArticlesAmount(currentCategory as string).then((data) => {
      setArticlesAmount(+data.headers.total)
    })
    return () => {
      setArticles([])
    }
  }, [currentCategory])

  const handlerLoadMore = () => {
    setIsFetching(true)
    getArticlesByCategory(
      currentCategory as string,
      PER_PAGE,
      pageNumber + 1,
    ).then((data) => {
      setIsFetching(false)
      setPageNumber(pageNumber + 1)
      setArticles([...articles, ...data])
    })
  }

  return (
    <>
      <FiltersBar currentCategory={currentCategory as string} />
      <section className="bg-white pt-28 md:pt-20">
        <Hero
          title={blok.title}
          subtitle={blok.subtitle}
          articles={firstArticles.slice(0, -1)}
        />
        <FeaturedArticle article={firstArticles[5]} />
        {isEmpty(articles) ? null : (
          <Articles
            articles={articles}
            handlerLoadMore={handlerLoadMore}
            canLoadMore={canLoadMore}
            isFetching={isFetching}
          />
        )}
      </section>
    </>
  )
}

export default PsychMagPageContent
