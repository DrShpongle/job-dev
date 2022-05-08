import * as React from 'react'
import {isEmpty} from 'lodash'

import Article from './article'

const Hero: React.FC<{title: string; subtitle: string; articles: any[]}> = ({
  title,
  subtitle,
  articles,
}) => {
  const primaryArticles = articles.slice(0, 2)
  const secondaryArticles = articles.slice(2)
  console.log('articles:', articles)
  return (
    <div className="container">
      <div className="pb-10">
        <h1 className="translate-y-28 text-center text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-4xl translate-y-28 text-center md:mt-6 md:text-xl lg:mt-7 lg:text-2xl lg:leading-normal xl:mt-8 xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
          {subtitle}
        </p>
        {!isEmpty(articles) && (
          <div className="flex flex-col items-start md:flex-row">
            <div className="xl:2/3 sticky top-0 inline-block w-3/5 space-y-16 pt-40 md:pr-10">
              {primaryArticles.map((article, i) => {
                return (
                  <Article key={i} article={article} withMinHeight={false} />
                )
              })}
            </div>
            <div className="xl:1/3 w-2/5 shrink-0 space-y-10 pt-40">
              {secondaryArticles.map((article, i) => {
                return (
                  <Article key={i} article={article} withMinHeight={false} />
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
