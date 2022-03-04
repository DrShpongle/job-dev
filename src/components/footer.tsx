import Link from 'next/link'
import { useEffect, useState } from 'react'

export interface mailChimpWindow extends Window {
  fnames: Array<string>;
  ftypes: Array<string>
}
declare let window: mailChimpWindow;

const Footer = () => {

  let [emailAddress, setEmailAddress] = useState('');
  
  useEffect(() => {
    window.fnames = new Array();
    window.ftypes = new Array();
    window.fnames[0] = 'EMAIL';
    window.ftypes[0] = 'email';
    window.fnames[1] = 'FNAME'
    window.ftypes[1] = 'text'
    window.fnames[2] = 'LNAME'
    window.ftypes[2] = 'text'
    window.fnames[3] = 'ADDRESS'
    window.ftypes[3] = 'address'
    window.fnames[4] = 'PHONE'
    window.ftypes[4] = 'phone'
    window.fnames[5] = 'BIRTHDAY'
    window.ftypes[5] = 'birthday';
  }, [""]);

  return (
    <footer
      className="bg-blue pt-8 pb-5 md:py-12 lg:pt-16 lg:pb-10"
      style={{ transform: 'translate3d(0,0,0)' }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/5">
            <div className="grid grid-cols-2 gap-4 2xl:grid-cols-3">
              <div>
                <h4 className="text-xl text-pink md:text-[1.625rem]">
                  Explore
                </h4>
                <ul className="mt-3 space-y-3 md:mt-7 md:space-y-4">
                  {navLinks.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link href={item.path}>
                          <a className="text-lg text-white duration-150 md:text-xl 2xl:text-2xl hover-hover:hover:text-pink">
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <h4 className="text-xl text-pink md:text-[1.625rem]">
                  Socials
                </h4>
                <ul className="mt-3 space-y-3 md:mt-7 md:space-y-4">
                  {socialLinks.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={item.path}
                          className="text-lg text-white duration-150 md:text-xl 2xl:text-2xl hover-hover:hover:text-pink"
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
          <div className="mt-10 w-full md:mt-0 md:w-2/5">
            <h4 className="text-xl text-pink md:h-8 md:text-right md:text-[1.625rem]">
              Stay in touch
            </h4>
            <p className="mt-3 text-lg text-white md:mt-7 md:text-right md:text-xl md:leading-relaxed 2xl:text-2xl 2xl:leading-relaxed">
              Enter your email and we’ll keep you updated with the latest about
              Jamie:
            </p>
            <form className="mt-6 flex flex-col space-y-4" action="https://googlemail.us14.list-manage.com/subscribe/post?u=765fbd76204248f87d0fc2620&amp;id=1367e9561a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
              <input
                type="text"
                className="h-[48px] rounded-none border px-4 md:h-[60px] md:px-5 md:text-xl lg:h-[70px] 2xl:text-2xl"
                placeholder="Enter your email address"
                value={emailAddress}
                onChange={(e)=>setEmailAddress(e.target.value)}
                name="EMAIL"
                id="mce-EMAIL"
              />
              <div id="mce-responses" className="clear">
                <div id="mce-error-response" className="hidden"></div>
                <div id="mce-success-response" className="hidden"></div>
              </div>  {/*  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->  */}
              <div className='mailChimp-hiddenTb' aria-hidden="true">
                <input type="text" name="b_765fbd76204248f87d0fc2620_1367e9561a" tabIndex={-1} defaultValue="" />
              </div>

              <button
                className="h-[48px] bg-pink text-center font-headings text-lg uppercase text-white duration-150 md:h-[60px] md:text-xl lg:h-[70px] xl:text-[1.625rem] hover-hover:hover:bg-white hover-hover:hover:text-pink"
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="lg:space-between flex w-full flex-col-reverse justify-between border-white/80 text-center text-sm md:mt-14 md:items-center md:text-lg lg:flex-row lg:border-t lg:pt-6 lg:text-left 2xl:text-2xl">
          <div className="mt-7 w-full border-t border-white/80 pt-4 text-white md:pt-6 lg:mt-0 lg:border-none lg:pt-0">
            Copyright © 2021 Jamie O&#8217;Brien. All rights reserved.
          </div>
          <ul className="mt-8 flex flex-col flex-nowrap items-center space-y-3 md:flex-row md:space-y-0 md:space-x-4 lg:mt-0">
            {auxiliaryLinks.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center first:before:hidden md:before:mr-4 md:before:block md:before:h-3 md:before:w-px md:before:bg-white/80"
                >
                  <Link href={item.path}>
                    <a className="whitespace-nowrap text-white hover-hover:hover:text-pink">
                      {item.title}
                    </a>
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
  // {title: 'Surf App', path: '/surf-app'},
  { title: 'Surf Experience', path: '/surf-experience' },
  { title: 'Surf Store', path: '/surf-store' },
  // {title: 'Psych Mag', path: '/psych-mag'},
  // {title: 'About Jamie', path: '/about'},
  // {title: 'Contact', path: '/contact'},
]

const auxiliaryLinks = [
  { title: 'Privacy Policy', path: '/privacy-policy' },
  { title: 'Terms of Use', path: '/terms-of-use' },
  { title: 'Legal', path: '/legal' },
  { title: 'Site Map', path: '/site-map' },
]

const socialLinks = [
  { title: 'Instagram', path: 'https://www.instagram.com/whoisjob/' },
  { title: 'Twitter', path: 'https://twitter.com/whoisjob' },
  {
    title: 'Youtube',
    path: 'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
  },
  { title: 'Facebook', path: 'https://www.facebook.com/whoisjob/' },
]

export default Footer
