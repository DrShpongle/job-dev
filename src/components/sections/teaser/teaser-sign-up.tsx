import * as React from 'react'
import Image from 'next/image'

const TeaserSignUp: React.FC<any> = ({blok}) => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-pink py-12 md:py-20 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container flex flex-col justify-center">
        <div>
          <h3 className="font-accented text-5xl text-white">
            Need The App?
          </h3>
          <h2 className="mt-1 text-7xl leading-none text-white max-w-4xl">
            drop us your deets
          </h2>
          <p className="text-2xl text-white pt-4">Pre-register and get in early on Jamie&apos;s epic Surf App.</p>
        </div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-3 pt-4">
            <div><input
              type="text"
              className="h-[48px] rounded-none w-full md:px-5 md:text-xl 2xl:text-2xl"
              placeholder="Jamie"
            /></div>
            <div className="pt-4 md:pt-0 md:pl-4"><input
              type="text"
              className="h-[48px] rounded-none w-full md:px-5 md:text-xl 2xl:text-2xl"
              placeholder="O'Brien"
            /></div>
            <div className="pt-4 md:pt-0 md:pl-4"><input
              type="text"
              className="h-[48px] rounded-none w-full md:px-5 md:text-xl 2xl:text-2xl"
              placeholder="legend@job.com"
            /></div>
            <div className="md:col-span-2 pt-4 flex">
              <div>
                <label className="text-white text-lg">
                  Add a check to agree to us storing your details. We need this to be able to tell you when the app is ready and we&apos;ll occasionally hit your inbox with the latest on JOB.
                </label>
              </div>
              <div className="w-[48px] h-[48px] shrink-0">
                <input className="w-[48px] h-[48px] opacity-0 absolute" type="checkbox" />
                <div className="w-full h-full bg-white text-center"><p className="text-blue text-5xl">✓</p></div>
              </div>
            </div>
            <div className="pt-4 md:pl-4" >
              <button
                type="button"
                className="h-[48px] w-full bg-blue text-center font-headings text-lg uppercase text-white md:text-xl xl:text-[1.625rem]"
              >
                Get on the list!
              </button>
            </div>
          </div>
        </form>
        <div className="pt-12">
          <Image
	    width="2500"
            height="1662"
            layout="responsive"
            src="/images/teaser-sign-up.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default TeaserSignUp
