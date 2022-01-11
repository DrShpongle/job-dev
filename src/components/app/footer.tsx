import Link from 'next/link'
import classNames from 'classnames'

const Footer = () => {
  return (
    <footer className="py-16 bg-gray">
      <div className="container">
        <div className="flex">
          <div className="w-3/5">
            <div className="grid grid-cols-2">
              <div>
                <h4 className="text-pink text-[1.625rem]">Explore</h4>
                <ul className="space-y-4 mt-7">
                  {footerNavLinks.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item.path}>
                          <a className="text-xl duration-150 2xl:text-2xl hover:text-blue">
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <h4 className="text-pink text-[1.625rem]">Socials</h4>
                <ul className="space-y-4 mt-7">
                  {footerSocialLinks.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          target="_blank"
                          href={item.path}
                          className="text-xl duration-150 2xl:text-2xl hover:text-blue"
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
          <div className="w-2/5">
            <h4 className="text-pink text-[1.625rem] text-right">
              Stay in touch
            </h4>
            <p className="text-xl text-right 2xl:leading-relaxed mt-7 2xl:text-2xl">
              Enter your email and we’ll keep you updated with the latest about
              Jamie:
            </p>
            <form className="flex flex-col mt-6 space-y-4">
              <input
                type="text"
                className="h-[70px] px-5 text-xl 2xl:text-2xl"
                placeholder="Enter your email address"
              />
              <button
                type="button"
                className="font-headings h-[70px] bg-pink text-white text-center text-[1.625rem] uppercase"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

const footerNavLinks = [
  {title: 'Surf App', path: '/surf-app'},
  {title: 'Surf Experience', path: '/surf-experience'},
  {title: 'Surf Store', path: '/surf-store'},
  {title: 'Psych Mag', path: '/psych-mag'},
  {title: 'About Jamie', path: '/about'},
  {title: 'Contact', path: '/contact'},
]

const footerSocialLinks = [
  {title: 'Twitter', path: 'https://twitter.com/whoisjob'},
  {title: 'Instagram', path: 'https://www.instagram.com/whoisjob/'},
  {title: 'Facebook', path: 'https://www.facebook.com/whoisjob/'},
  {
    title: 'Youtube',
    path: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
  },
]

export default Footer
