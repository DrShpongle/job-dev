import * as React from 'react'
import classNames from 'classnames'
import {motion} from 'framer-motion'

import {IconChevronDown, IconChevronUp} from 'lib/icons'

const FiltersBar: React.FC<{
  currentCategory: string
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
}> = ({currentCategory, setCurrentCategory}) => {
  const [expanded, setExpanded] = React.useState<boolean>(false)

  return (
    <div className="fixed top-10 z-10 w-full bg-pink md:top-14 lg:top-20">
      <div className="lg:container">
        <div className="relative flex h-10 items-center justify-center font-headings text-lg uppercase text-white lg:h-20 lg:justify-between lg:space-x-7">
          <div className="hidden lg:block">filter by category:</div>
          <button
            className="flex items-center space-x-2 text-white lg:hidden"
            onClick={() => setExpanded(!expanded)}
          >
            <span>Filter</span>
            {expanded ? (
              <IconChevronUp className="h-4 w-4" />
            ) : (
              <IconChevronDown className="h-4 w-4" />
            )}
          </button>
          <motion.div
            variants={{
              collapsed: {height: 0},
              expanded: {height: 'auto'},
            }}
            initial="collapsed"
            animate={expanded ? 'expanded' : 'collapsed'}
            transition={{type: 'spring', duration: 0.6, bounce: 0.3}}
            className="absolute left-0 top-0 flex w-full translate-y-10 flex-col items-center overflow-hidden bg-pink lg:static lg:w-auto lg:translate-y-0 lg:flex-row lg:space-x-7"
          >
            {filters.map((item, i) => (
              <button
                key={i}
                className={classNames(
                  'mb-2 uppercase',
                  currentCategory === item.categoryId
                    ? 'text-blue'
                    : 'text-white',
                )}
                onClick={() => {
                  if (item.categoryId && currentCategory !== item.categoryId) {
                    setCurrentCategory(item.categoryId)
                    setExpanded(false)
                    // TODO
                    // setPageNumber(1)
                    // getArticlesByCategory(item.categoryId, PER_PAGE, 1).then(
                    //   (data) => setArticles(data),
                    // )
                    // getArticlesAmount(item.categoryId).then((data) =>
                    //   setArticlesAmount(+data.headers.total),
                    // )
                  }
                }}
              >
                {item.title}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FiltersBar

const filters = [
  {
    title: 'all',
    categoryId: 'all',
  },
  {
    title: 'features',
    categoryId: process.env.NEXT_PUBLIC_CATEGORY_ID_FEATURES,
  },
  {
    title: 'vlog',
    categoryId: process.env.NEXT_PUBLIC_CATEGORY_ID_VLOG,
  },
  {
    title: 'top tips',
    categoryId: process.env.NEXT_PUBLIC_CATEGORY_ID_TOP_TIPS,
  },
  {
    title: 'gear',
    categoryId: process.env.NEXT_PUBLIC_CATEGORY_ID_GEAR,
  },
  {
    title: 'travel guides',
    categoryId: process.env.NEXT_PUBLIC_CATEGORY_ID_TRAVEL_GUIDES,
  },
]
