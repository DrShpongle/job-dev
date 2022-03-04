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
      className="relative flex h-6 w-6 items-center justify-center lg:hidden"
      onClick={onClick}
    >
      <motion.div
        variants={variantsTogglerTop}
        initial="closed"
        animate={isOpened ? 'opened' : 'closed'}
        transition={{duration: 0.25}}
        className="absolute h-1 w-6 rounded-full bg-pink"
      />
      <motion.div
        variants={variantsTogglerBottom}
        initial="closed"
        animate={isOpened ? 'opened' : 'closed'}
        transition={{duration: 0.25}}
        className="absolute h-1 w-6 rounded-full bg-pink"
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
          className="mobile-menu fixed top-0 left-0 z-30 mt-10 flex w-full touch-none flex-col items-center justify-between bg-pink pt-16 pb-24 md:mt-14 lg:hidden"
        >
          <div className="flex flex-col items-center">
            <ul className="flex flex-col items-center space-y-3">
              {data.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.path}>
                      <a className="font-headings text-2xl uppercase text-white">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
            {/* <a
              href="#"
              className="mt-20 block rounded-full bg-white py-2 px-4 font-headings text-base uppercase text-pink"
            >
              Download app
            </a> */}
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
