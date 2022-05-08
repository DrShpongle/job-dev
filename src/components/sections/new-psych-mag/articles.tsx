import * as React from 'react'
import {isEmpty} from 'lodash'

import Article from './article'

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
