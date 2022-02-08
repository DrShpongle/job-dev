import * as React from 'react'
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
    <header className="fixed top-0 left-0 z-30 h-10 w-full bg-white py-2 md:h-14 md:py-3 lg:h-20 lg:py-5">
      <div className="container max-w-none lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex h-6 w-[120px] shrink-0 justify-start md:h-8 md:w-40 xl:h-10 xl:w-[198px]">
              <Image
                src="/images/logo.svg"
                width={198}
                height={40}
                alt="Jamie O&#8217;Brien"
                priority
              />
            </a>
          </Link>
          <ul className="hidden shrink-0 flex-nowrap lg:flex lg:space-x-6 xl:space-x-10 2xl:space-x-16">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  {item.external ? (
                    <a
                      className="font-headings uppercase text-pink duration-150 lg:text-lg hover-hover:hover:text-blue"
                      href={item.path}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link href={item.path}>
                      <a
                        className={classNames(
                          'font-headings uppercase duration-150 lg:text-lg hover-hover:hover:text-blue',
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
          <button className="hidden h-10 rounded-full bg-pink px-6 py-2 font-headings uppercase text-white lg:block">
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
