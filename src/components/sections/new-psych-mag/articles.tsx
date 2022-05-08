import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {isEmpty} from 'lodash'

import {getCategoryName} from 'utils/get-articles'
import {formatDate} from 'utils/format-date'

const Article: React.FC<any> = ({article}) => {
  return (
    <div>
      <Link
        href={`${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/articles/${article.slug}`}
      >
        <a className="block">
          <div className="aspect-video overflow-hidden">
            <div className="relative h-full w-full duration-700 hover-hover:hover:scale-110">
              <Image
                src={article.content.hero_image.filename}
                alt="article.content.title"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </a>
      </Link>
      <div className="mt-2 flex items-baseline justify-between md:mt-4 lg:mt-7">
        {getCategoryName(article.content.category[0]) && (
          <h3 className="text-sm uppercase text-pink md:text-lg lg:text-2xl xl:text-[2rem]">
            {getCategoryName(article.content.category[0])}
          </h3>
        )}
        <h4 className="hidden uppercase opacity-40 lg:block lg:text-lg xl:text-[1.3rem]">
          {formatDate(article.published_at)}
        </h4>
      </div>
      <div className="mt-1 min-h-[100px] md:mt-2 md:min-h-[113px] lg:mt-4 lg:min-h-[90px] xl:mt-5 xl:min-h-[105px]">
        <Link
          href={`${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/articles/${article.slug}`}
        >
          <a className="block duration-500 hover-hover:hover:-translate-y-1">
            <h2 className="text-xl leading-tight line-clamp-4 md:text-3xl md:leading-tight md:line-clamp-3 lg:text-4xl lg:leading-tight lg:line-clamp-2 xl:text-[2.625rem] xl:leading-tight">
              {article.content.title}
            </h2>
          </a>
        </Link>
      </div>
      <p className="mt-2 hidden text-sm lg:mt-4 lg:block lg:text-xl lg:line-clamp-2 xl:mt-5 xl:text-2xl">
        {article.content.short_description}
      </p>
      <h4 className="mt-1 text-xs uppercase opacity-40 md:mt-2 md:text-base lg:mt-0 lg:hidden">
        {formatDate(article.published_at)}
      </h4>
    </div>
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
