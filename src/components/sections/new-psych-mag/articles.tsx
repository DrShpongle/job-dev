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
        <div className="mt-4 flex items-baseline justify-between md:mt-7">
          <h3 className="text-sm uppercase text-pink md:text-[2rem]">
            {categories[categoryKey].title}
          </h3>
          <h4 className="text-xs uppercase opacity-40 md:text-[1.3rem]">
            {formatDate(article.published_at)}
          </h4>
        </div>
        <div className="min-h-[75px] md:min-h-[105px]">
          <h2 className="mt-2 text-3xl leading-tight line-clamp-2 md:mt-6 md:text-[3.5rem] md:leading-tight">
            {article.content.title}
          </h2>
        </div>
        <p className="mt-2 text-sm line-clamp-2 md:mt-6 md:text-2xl">
          {article.content.short_description}
        </p>
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
    <div className="bg-white py-20">
      <div className="container">
        {!isEmpty(articles) && (
          <div className="grid gap-y-8 md:grid-cols-3 md:gap-x-6 md:gap-y-12">
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
