import * as React from 'react'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'

import {IconFacebook, IconInstagram, IconTwitter, IconYoutube} from 'lib/icons'

const variantsMobileMenu = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
}

const variantsTogglerTop = {
  closed: {y: -3, rotate: 0},
  opened: {y: 0, rotate: -45},
}

const variantsTogglerBottom = {
  closed: {y: 3},
  opened: {y: 0, rotate: 45},
}

export const MobileMenuToggler: React.FC<{
  onClick: () => void
  isOpened: boolean
}> = ({onClick, isOpened}) => {
  return (
    <div
      className="relative flex items-center justify-center w-6 h-6 lg:hidden"
      onClick={onClick}
    >
      <motion.div
        variants={variantsTogglerTop}
        initial="closed"
        animate={isOpened ? 'opened' : 'closed'}
        transition={{duration: 0.25}}
        className="absolute w-6 h-1 rounded-full bg-pink"
      />
      <motion.div
        variants={variantsTogglerBottom}
        initial="closed"
        animate={isOpened ? 'opened' : 'closed'}
        transition={{duration: 0.25}}
        className="absolute w-6 h-1 rounded-full bg-pink"
      />
    </div>
  )
}

const MobileMenu: React.FC<{
  isOpened: boolean
  data: any[]
}> = ({isOpened, data}) => {
  React.useEffect(() => {
    document.body.style.overflow = isOpened ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpened])
  return (
    <AnimatePresence>
      {isOpened ? (
        <motion.div
          variants={variantsMobileMenu}
          transition={{duration: 0.25}}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed top-0 left-0 z-30 flex flex-col items-center justify-between w-full pt-16 pb-10 mt-10 bg-pink lg:hidden mobile-menu md:mt-14 touch-none"
        >
          <div>
            <ul className="flex flex-col items-center space-y-3">
              {data.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.path}>
                      <a className="text-2xl text-white uppercase font-headings">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <a href="https://www.instagram.com/whoisjob/'">
              <IconInstagram className="h-6 text-white" />
            </a>
            <a href="https://twitter.com/whoisjob">
              <IconTwitter className="h-[22px] text-white" />
            </a>
            <a href="https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg">
              <IconYoutube className="h-[22px] text-white" />
            </a>
            <a href="https://www.facebook.com/whoisjob/">
              <IconFacebook className="h-6 text-white" />
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default MobileMenu
