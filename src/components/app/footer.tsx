import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="pt-8 pb-5 md:py-12 lg:pt-16 lg:pb-10 bg-gray">
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/5">
            <div className="grid grid-cols-2 gap-4 2xl:grid-cols-3">
              <div>
                <h4 className="text-pink text-xl md:text-[1.625rem]">
                  Explore
                </h4>
                <ul className="mt-3 space-y-3 md:space-y-4 md:mt-7">
                  {navLinks.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item.path}>
                          <a className="text-lg duration-150 md:text-xl 2xl:text-2xl hover-hover:hover:text-blue">
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <h4 className="text-pink text-xl md:text-[1.625rem]">
                  Socials
                </h4>
                <ul className="mt-3 space-y-3 md:space-y-4 md:mt-7">
                  {socialLinks.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={item.path}
                          className="text-lg duration-150 md:text-xl 2xl:text-2xl hover-hover:hover:text-blue"
                        >
                          {item.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 md:w-2/5 md:mt-0">
            <h4 className="text-pink text-xl md:text-[1.625rem] md:h-8 md:text-right">
              Stay in touch
            </h4>
            <p className="mt-3 text-lg md:text-xl md:leading-relaxed md:text-right 2xl:leading-relaxed md:mt-7 2xl:text-2xl">
              Enter your email and we’ll keep you updated with the latest about
              Jamie:
            </p>
            <form className="flex flex-col mt-6 space-y-4">
              <input
                type="text"
                className="h-[48px] md:h-[60px] lg:h-[70px] px-4 md:px-5 rounded-none md:text-xl 2xl:text-2xl border"
                placeholder="Enter your email address"
              />
              <button
                type="button"
                className="font-headings h-[48px] md:h-[60px] lg:h-[70px] bg-pink text-white text-center text-lg md:text-xl xl:text-[1.625rem] uppercase"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between w-full text-sm text-center lg:text-left lg:pt-6 lg:border-t md:text-lg border-black/20 md:items-center lg:flex-row md:mt-14 2xl:text-2xl lg:space-between">
          <div className="w-full pt-4 border-t lg:border-none md:pt-6 lg:pt-0 mt-7 lg:mt-0 text-black/50 border-black/20">
            Copyright © 2021 Jamie O’Brien. All rights reserved.
          </div>
          <ul className="flex flex-col items-center mt-8 space-y-3 lg:mt-0 md:flex-row md:space-y-0 md:space-x-4 flex-nowrap">
            {auxiliaryLinks.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center md:before:w-px md:before:h-3 md:before:bg-black/20 md:before:block md:before:mr-4 first:before:hidden"
                >
                  <Link href={item.path}>
                    <a className="whitespace-nowrap">{item.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}

const navLinks = [
  {title: 'Surf App', path: '/surf-app'},
  {title: 'Surf Experience', path: '/surf-experience'},
  {title: 'Surf Store', path: '/surf-store'},
  {title: 'Psych Mag', path: '/surf-mag'},
  {title: 'About Jamie', path: '/about'},
  {title: 'Contact', path: '/contact'},
]

const auxiliaryLinks = [
  {title: 'Privacy Policy', path: '/privacy-policy'},
  {title: 'Terms of Use', path: '/terms-of-use'},
  {title: 'Legal', path: '/legal'},
  {title: 'Site Map', path: '/site-map'},
]

const socialLinks = [
  {title: 'Instagram', path: 'https://www.instagram.com/whoisjob/'},
  {title: 'Twitter', path: 'https://twitter.com/whoisjob'},
  {
    title: 'Youtube',
    path: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
  },
  {title: 'Facebook', path: 'https://www.facebook.com/whoisjob/'},
]

export default Footer
