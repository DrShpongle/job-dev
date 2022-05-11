import * as React from 'react'
import classNames from 'classnames'
import {motion} from 'framer-motion'
import {useWindowSize, useClickAway} from 'react-use'

import {IconChevronDown, IconChevronUp} from 'lib/icons'

const FiltersBar: React.FC<{
  currentCategory: string
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
}> = ({currentCategory, setCurrentCategory}) => {
  const ref = React.useRef(null)
  const [expanded, setExpanded] = React.useState<boolean>(false)
  const {width} = useWindowSize()

  useClickAway(ref, () => {
    setExpanded(false)
  })

  return (
    <div className="fixed top-10 z-10 w-full bg-pink md:top-14 lg:top-20">
      <div className="lg:container">
        <div
          ref={ref}
          className="relative flex h-10 items-center justify-center font-headings text-lg uppercase text-white md:h-11 lg:justify-start lg:space-x-5 xl:space-x-7"
        >
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
            animate={
              expanded || (isFinite(width) && width >= 1024)
                ? 'expanded'
                : 'collapsed'
            }
            transition={{type: 'spring', duration: 0.6, bounce: 0.3}}
            className="absolute left-0 top-0 flex w-full translate-y-10 flex-col items-center overflow-hidden bg-pink lg:static lg:w-auto lg:translate-y-0 lg:flex-row lg:space-x-5 xl:space-x-7"
          >
            {filters.map((item, i) => (
              <button
                key={i}
                className={classNames(
                  'mb-2 uppercase lg:mb-0',
                  currentCategory === item.categoryId
                    ? 'text-blue'
                    : 'text-white',
                )}
                onClick={() => {
                  if (item.categoryId && currentCategory !== item.categoryId) {
                    setCurrentCategory(item.categoryId)
                    setExpanded(false)
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
