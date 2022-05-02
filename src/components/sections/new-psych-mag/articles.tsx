import * as React from 'react'

const Articles: React.FC<{
  articles: any[]
  handlerLoadMore: () => void
  canLoadMore: boolean
}> = ({articles, handlerLoadMore, canLoadMore}) => {
  return (
    <div className="space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
      {articles.map((article: any, i: number) => (
        <div key={i}>{article.content.title}</div>
      ))}
      {canLoadMore ? (
        <button
          aria-label="load more articles"
          onClick={() => handlerLoadMore()}
          className="mt-5 flex h-11 w-full items-center justify-center rounded-sm bg-pink font-headings uppercase text-white duration-150 md:mt-6 md:h-12 md:text-lg lg:mt-7 lg:h-14 lg:text-xl hover-hover:hover:bg-blue"
        >
          more
        </button>
      ) : null}
    </div>
  )
}

export default Articles
