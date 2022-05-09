import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {isEmpty} from 'lodash'

import {getCategoryName} from 'utils/get-articles'
import {formatDate} from 'utils/format-date'

const FeaturedArticle: React.FC<{article: any}> = ({article}) => {
  return isEmpty(article) ? null : (
    <div className="bg-blue py-5 text-white md:py-10 lg:py-12 xl:py-14">
      <div className="container">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-end md:space-x-8 lg:space-x-12 xl:space-x-16">
          <div className="mt-4 w-full shrink-0 md:mt-0 md:w-2/5 2xl:w-1/3">
            <div className="flex items-baseline justify-between">
              {getCategoryName(article.content.category[0]) && (
                <h3 className="text-sm uppercase text-pink md:text-lg lg:text-2xl xl:text-[2rem]">
                  {getCategoryName(article.content.category[0])}
                </h3>
              )}
              <h4 className="text-[10px] uppercase md:text-sm lg:text-lg xl:text-[1.3rem]">
                {formatDate(article.published_at)}
              </h4>
            </div>
            <Link
              href={`${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/articles/${article.slug}`}
            >
              <a className="block duration-500 hover-hover:hover:-translate-y-1">
                <h2 className="mt-1 text-3xl leading-tight md:mt-2 lg:mt-4 lg:text-4xl lg:leading-tight xl:mt-5 xl:text-[2.625rem]">
                  {article.content.title}
                </h2>
              </a>
            </Link>
            <p className="mt-2 text-sm line-clamp-3 lg:mt-4 lg:text-xl xl:text-2xl">
              {article.content.short_description}
            </p>
          </div>
          <div className="w-full grow md:w-auto">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedArticle
