import * as React from 'react'
import {isEmpty} from 'lodash'
import axios from 'axios'
import Storyblok, {useStoryblok} from 'utils/storyblok-service'

import Hero from './hero'
// import FeaturedArticle from './featured-article'
// import Articles from './articles'

import {getAllArticles, getArticlesByCategory} from 'utils/get-articles'

const PsychMagPageContent: React.FC<any> = ({blok}) => {
  const [sortedBy, setSortedBy] = React.useState<any>()
  const [articles, setArticles] = React.useState<any>([])
  const [pageNumber, setPageNumber] = React.useState<number>(1)

  const categoryIdFeatures = '3a74027d-ae5a-49ca-82aa-a4a13a017d9c'
  const categoryIdVlog = 'dd9b6f76-022d-4d6a-bc70-11e806944a0a'
  const categoryIdTopTips = '960103db-81c4-4100-a374-27f1785fed32'
  const categoryIdGear = 'a95f141f-d357-43c2-94ae-93dea86ec306'
  const categoryIdTravelGuide = '44efe4b4-1add-435c-bb18-16fdb7823dfb'

  React.useEffect(() => {
    getAllArticles().then((data) => setArticles(data))
    console.log('amount:', getAmount())
  }, [])

  const getAmount = async () => {
    const initial = await Storyblok.client.head(
      `https://api.storyblok.com/v2/cdn/stories/?token=${process.env.NEXT_PUBLIC_STORYBLOK_API_KEY}&starts_with=articles/&filter_query[category][any_in_array]=960103db-81c4-4100-a374-27f1785fed32`,
      {
        params: {token: Storyblok.accessToken},
      },
    )
    console.log('initial:', initial.headers.total)
  }

  console.log('articles:', articles)

  return (
    <>
      <div className="fixed top-[80px] z-10 w-full bg-pink">
        <div className="container">
          <div className="flex h-[44px] items-center space-x-6">
            <button
              onClick={() => getAllArticles().then((data) => setArticles(data))}
            >
              All
            </button>
            <button
              onClick={() =>
                getArticlesByCategory(categoryIdFeatures).then((data) =>
                  setArticles(data),
                )
              }
            >
              Features
            </button>
            <button
              onClick={() =>
                getArticlesByCategory(categoryIdVlog).then((data) =>
                  setArticles(data),
                )
              }
            >
              Vlog
            </button>
            <button
              onClick={() =>
                getArticlesByCategory(categoryIdTopTips).then((data) =>
                  setArticles(data),
                )
              }
            >
              Top Tips
            </button>
            <button
              onClick={() =>
                getArticlesByCategory(categoryIdGear).then((data) =>
                  setArticles(data),
                )
              }
            >
              Gear
            </button>
            <button
              onClick={() =>
                getArticlesByCategory(categoryIdTravelGuide).then((data) =>
                  setArticles(data),
                )
              }
            >
              Travel guides
            </button>
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
            <button
              onClick={() => {
                getAllArticles(6, pageNumber + 1).then((data) => {
                  setArticles([...articles, ...data])
                })
              }}
            >
              more
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default PsychMagPageContent
