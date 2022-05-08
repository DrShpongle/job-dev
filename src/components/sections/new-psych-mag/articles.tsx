import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {isEmpty} from 'lodash'

import {categories} from 'lib/categories'
import {formatDate} from 'utils/format-date'

const Article: React.FC<any> = ({article}) => {
  // TODO
  const categoryKey =
    (Object.keys(categories) as Array<keyof typeof categories>).find(
      (key) => categories[key].id === article.content.category[0],
    ) || 'features'
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/articles/${article.slug}`}
    >
      <a className="group block">
        <div className="relative aspect-video overflow-hidden">
          <div className="h-full w-full duration-500 group-hover:scale-110">
            <Image
              src={article.content.hero_image.filename}
              alt="article.content.title"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="mt-2 flex items-baseline justify-between md:mt-4 lg:mt-7">
          <h3 className="text-sm uppercase text-pink md:text-lg lg:text-2xl xl:text-[2rem]">
            {categories[categoryKey].title}
          </h3>
          <h4 className="hidden uppercase opacity-40 lg:block lg:text-lg xl:text-[1.3rem]">
            {formatDate(article.published_at)}
          </h4>
        </div>
        <div className="mt-1 min-h-[75px] md:mt-2 md:min-h-[112px] lg:mt-4 lg:min-h-[90px] xl:mt-5">
          <h2 className="text-xl leading-tight line-clamp-4 md:text-4xl md:leading-tight md:line-clamp-3 lg:line-clamp-2 xl:text-[2.625rem]">
            {article.content.title}
          </h2>
        </div>
        <p className="mt-2 hidden text-sm lg:mt-4 lg:block lg:text-xl lg:line-clamp-2 xl:mt-5 xl:text-2xl">
          {article.content.short_description}
        </p>
        <h4 className="mt-1 text-xs uppercase opacity-40 md:mt-2 md:text-base lg:mt-0 lg:hidden">
          {formatDate(article.published_at)}
        </h4>
      </a>
    </Link>
  )
}

const Articles: React.FC<{
  articles: any[]
  handlerLoadMore: () => void
  canLoadMore: boolean
}> = ({articles, handlerLoadMore, canLoadMore}) => {
  return (
    <div className="bg-white py-6 md:py-16 lg:py-20">
      <div className="container">
        {!isEmpty(articles) && (
          <div className="grid grid-cols-3 gap-y-6 gap-x-2 md:gap-x-6 md:gap-y-12">
            {articles.map((article: any, i: number) => (
              <Article key={i} article={article} />
            ))}
          </div>
        )}
        {canLoadMore ? (
          <button
            aria-label="load more articles"
            onClick={() => handlerLoadMore()}
            className="mt-6 flex h-11 w-full items-center justify-center rounded-sm bg-pink font-headings uppercase text-white duration-150 md:mt-8 md:h-12 md:text-lg lg:mt-10 lg:h-14 lg:text-xl hover-hover:hover:bg-blue"
          >
            more
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default Articles
