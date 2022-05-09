import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

import {getCategoryName} from 'utils/get-articles'
import {formatDate} from 'utils/format-date'

const Article: React.FC<{
  article: any
  withMinHeight?: boolean
  primary?: boolean
}> = ({article, withMinHeight = true, primary = false}) => {
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
      <div
        className={classNames(
          'mt-1 md:mt-2 lg:mt-4',
          withMinHeight &&
            'min-h-[97px] md:min-h-[104px] lg:min-h-[83px] xl:min-h-[97px]',
        )}
      >
        <Link
          href={`${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/articles/${article.slug}`}
        >
          <a className="block duration-500 hover-hover:hover:-translate-y-1">
            <h2
              className={classNames(
                'leading-[1.15] line-clamp-4 md:leading-[1.15] md:line-clamp-3 lg:leading-[1.15] lg:line-clamp-2 xl:leading-[1.15]',
                primary
                  ? 'text-[31px] md:text-4xl lg:text-[2.625rem] xl:text-[3.5rem]'
                  : 'text-[21px] md:text-3xl lg:text-4xl xl:text-[2.625rem]',
              )}
            >
              {article.content.title}
            </h2>
          </a>
        </Link>
      </div>
      <p className="mt-2 hidden text-sm lg:mt-4 lg:block lg:text-xl lg:line-clamp-3 xl:text-2xl">
        {article.content.short_description}
      </p>
      <h4 className="mt-1 text-xs uppercase opacity-40 md:mt-2 md:text-base lg:mt-0 lg:hidden">
        {formatDate(article.published_at)}
      </h4>
    </div>
  )
}

export default Article
