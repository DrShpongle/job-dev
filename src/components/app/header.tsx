import {useRouter} from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'

const navLinks = [
  {title: 'Surf App', path: '/surf-app'},
  {title: 'Surf Experience', path: '/surf-experience'},
  {title: 'Surf Store', path: '/surf-store'},
  {title: 'Psych Mag', path: '/psych-mag'},
  {title: 'About Jamie', path: '/about'},
  {title: 'Contact', path: '/contact'},
]

const Header = () => {
  const router = useRouter()
  return (
    <header className="h-20 py-5 border-b px-9">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex shrink-0 relative w-[110px] h-[23px] md:w-[132px] md:h-[28px] 2xl:w-[198px] 2xl:h-[42px]">
              <Image src="/images/logo.svg" layout="fill" />
            </a>
          </Link>
          <ul className="flex space-x-8 shrink-0 2xl:space-x-16 flex-nowrap">
            {navLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>
                    <a
                      className={classNames(
                        'hover:text-blue duration-150 font-headings uppercase text-lg',
                        router.pathname === item.path
                          ? ' text-blue'
                          : 'text-pink',
                      )}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
          <button className="h-10 px-4 py-2 text-white uppercase rounded-full bg-pink font-headings">
            Download app
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
