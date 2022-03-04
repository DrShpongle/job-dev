import * as React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

const Subheader = () => {
  const router = useRouter()
  const matchString = /^\/psych-mag/
  return matchString.test(router.asPath) ? (
    <nav className="sticky top-10 left-0 z-30 hidden h-11 w-full bg-pink md:top-14 md:block lg:top-20">
      <div className="container flex h-full items-center justify-center">
        <ul className="flex items-center space-x-16 font-headings text-lg uppercase text-white">
          {subheaderLinks.map((item, i) => {
            return (
              <li key={i}>
                <Link href={`/psych-mag/#${item.anchor}`}>
                  <a className="text-white duration-150 hover-hover:hover:text-blue">
                    {item.title}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  ) : null
}

export default Subheader

const subheaderLinks = [
  {title: "Jamie's vlog", anchor: 'vlog'},
  {title: 'Features', anchor: 'features'},
  {title: 'Top tips', anchor: 'top-tips'},
  {title: 'Gear', anchor: 'gear'},
  {title: 'Travel guides', anchor: 'travel-guides'},
]
