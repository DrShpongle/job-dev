import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

import MobileMenu, {MobileMenuToggler} from 'components/mobile-menu'

const Header = () => {
  const router = useRouter()
  const [mobileMenuIsOpened, setMobileMenuIsOpened] =
    React.useState<boolean>(false)
  return (
    <header className="fixed top-0 left-0 z-30 w-full h-10 py-2 bg-white md:py-3 md:h-14 lg:py-5 lg:h-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex justify-start w-[120px] h-6 shrink-0 md:w-40 md:h-8 xl:w-[198px] xl:h-10">
              <Image
                src="/images/logo.svg"
                width={198}
                height={40}
                alt="Jamie O'Brien"
              />
            </a>
          </Link>
          <ul className="hidden lg:flex shrink-0 lg:space-x-6 xl:space-x-10 2xl:space-x-16 flex-nowrap">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  {item.external ? (
                    <a
                      className="uppercase duration-150 text-pink hover:text-blue font-headings lg:text-lg"
                      href={item.path}
                      target="_blank"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link href={item.path}>
                      <a
                        className={classNames(
                          'hover:text-blue duration-150 font-headings uppercase lg:text-lg',
                          router.pathname === item.path
                            ? ' text-blue'
                            : 'text-pink',
                        )}
                      >
                        {item.title}
                      </a>
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
          <button className="hidden h-10 px-4 py-2 text-white uppercase rounded-full bg-pink font-headings lg:block">
            Download app
          </button>
          <MobileMenuToggler
            onClick={() => setMobileMenuIsOpened(!mobileMenuIsOpened)}
            isOpened={mobileMenuIsOpened}
          >
            X
          </MobileMenuToggler>
          <MobileMenu data={navLinks} isOpened={mobileMenuIsOpened} />
        </div>
      </div>
    </header>
  )
}

export default Header

const navLinks = [
  {title: 'Surf App', path: '/surf-app'},
  {
    title: 'Surf Experience',
    path: 'https://www.jobsurfexperience.com/',
    external: true,
  },
  {
    title: 'Surf Store',
    path: 'https://www.jamieobrienshop.com/',
    external: true,
  },
  {title: 'Psych Mag', path: '/psych-mag'},
  {title: 'About Jamie', path: '/about'},
  {title: 'Contact', path: '/contact'},
]
