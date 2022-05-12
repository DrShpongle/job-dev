import * as React from 'react'
import classNames from 'classnames'
import {motion} from 'framer-motion'
import {useWindowSize, useClickAway} from 'react-use'

import {IconChevronDown, IconChevronUp} from 'lib/icons'
import {categories} from 'lib/categories'

const allCategories = Object.values(categories)

const FilterDesktop: React.FC<{
  currentCategory: string
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
}> = ({currentCategory, setCurrentCategory}) => {
  return (
    <div className="relative flex h-10 items-center space-x-5 font-headings text-lg uppercase text-white md:h-11 xl:space-x-7">
      <div>filter by category:</div>
      <ul className="flex items-center space-x-5 xl:space-x-7">
        {allCategories.map((item: any, i: number) => (
          <li key={i}>
            <button
              className={classNames(
                'uppercase',
                currentCategory === item.slug ? 'text-blue' : 'text-white',
              )}
              onClick={() => {
                if (currentCategory !== item.slug) {
                  setCurrentCategory(item.slug)
                }
              }}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const FilterMobile: React.FC<{
  currentCategory: string
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
}> = ({currentCategory, setCurrentCategory}) => {
  const ref = React.useRef(null)
  const [expanded, setExpanded] = React.useState<boolean>(false)

  useClickAway(ref, () => {
    setExpanded(false)
  })

  return (
    <div
      ref={ref}
      className="relative flex h-10 items-center justify-center font-headings text-lg uppercase text-white md:h-11"
    >
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
          collapsed: {height: 0, transition: {duration: 0.5}},
          expanded: {
            height: 'auto',
            transition: {type: 'spring', duration: 0.6, bounce: 0.3},
          },
        }}
        initial="collapsed"
        animate={expanded ? 'expanded' : 'collapsed'}
        className="absolute left-0 top-0 flex w-full translate-y-10 flex-col items-center overflow-hidden bg-pink"
      >
        <ul className="flex flex-col items-center space-y-2 pt-2 pb-3">
          {allCategories.map((item: any, i: number) => (
            <li key={i}>
              <button
                className={classNames(
                  'uppercase',
                  currentCategory === item.slug ? 'text-blue' : 'text-white',
                )}
                onClick={() => {
                  if (currentCategory !== item.slug) {
                    setCurrentCategory(item.slug)
                    setExpanded(false)
                  }
                }}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

const FiltersBar: React.FC<{
  currentCategory: string
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>
}> = ({currentCategory, setCurrentCategory}) => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const {width} = useWindowSize()
  React.useEffect(() => {
    setIsMounted(true)
  })
  return isMounted ? (
    <div className="fixed top-10 z-10 w-full bg-pink md:top-14 lg:top-20">
      <div className="lg:container">
        {isFinite(width) && width < 1024 ? (
          <FilterMobile
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
        ) : (
          <FilterDesktop
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
        )}
      </div>
    </div>
  ) : null
}

export default FiltersBar
