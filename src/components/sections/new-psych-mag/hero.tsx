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
  return (
    <div className="container">
      <div className="pb-6 md:pb-10">
        <h1 className="text-center text-5xl leading-none md:translate-y-20 md:text-6xl lg:translate-y-28 lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-4xl text-center md:mt-6 md:translate-y-20 md:text-xl lg:mt-7 lg:translate-y-28 lg:text-2xl lg:leading-normal xl:mt-8 xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-start md:mt-0 md:flex-row">
          {/* <div className="w-full grow space-y-6 md:space-y-8 md:pt-32 md:pr-8 lg:space-y-10 lg:pt-40 lg:pr-10 xl:space-y-12"> */}
          <div className="top-0 inline-block w-full grow space-y-6 md:sticky md:space-y-8 md:pt-32 md:pr-8 lg:space-y-10 lg:pt-40 lg:pr-10 xl:space-y-12">
            {!isEmpty(primaryArticles) &&
              primaryArticles.map((article, i) => {
                return <Article key={i} article={article} primary />
              })}
          </div>
          <div className="mt-6 grid w-full shrink-0 grid-cols-3 gap-y-5 gap-x-2 md:mt-0 md:w-2/5 md:grid-cols-1 md:gap-x-0 md:gap-y-6 md:pt-32 lg:gap-y-9 lg:pt-40 xl:w-1/3">
            {!isEmpty(secondaryArticles) &&
              secondaryArticles.map((article, i) => {
                return <Article key={i} article={article} secondary={true} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
