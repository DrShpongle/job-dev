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
          <h3 className="font-accented text-5xl text-white">Need The App?</h3>
          <h2 className="mt-1 max-w-4xl text-7xl leading-none text-white">
            drop us your deets
          </h2>
          <p className="pt-4 text-2xl text-white">
            Pre-register and get in early on Jamie&apos;s epic Surf App.
          </p>
        </div>
        <form>
          <div className="grid grid-cols-1 pt-4 md:grid-cols-3">
            <div>
              <input
                type="text"
                className="h-[48px] w-full rounded-none md:px-5 md:text-xl 2xl:text-2xl"
                placeholder="Jamie"
              />
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <input
                type="text"
                className="h-[48px] w-full rounded-none md:px-5 md:text-xl 2xl:text-2xl"
                placeholder="O'Brien"
              />
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <input
                type="text"
                className="h-[48px] w-full rounded-none md:px-5 md:text-xl 2xl:text-2xl"
                placeholder="legend@job.com"
              />
            </div>
            <div className="flex pt-4 md:col-span-2">
              <div>
                <label className="text-lg text-white">
                  Add a check to agree to us storing your details. We need this
                  to be able to tell you when the app is ready and we&apos;ll
                  occasionally hit your inbox with the latest on JOB.
                </label>
              </div>
              <div className="h-[48px] w-[48px] shrink-0">
                <input
                  className="absolute h-[48px] w-[48px] opacity-0"
                  type="checkbox"
                />
                <div className="h-full w-full bg-white text-center">
                  <p className="text-5xl text-blue">✓</p>
                </div>
              </div>
            </div>
            <div className="pt-4 md:pl-4">
              <button
                type="button"
                className="h-[48px] w-full bg-blue text-center font-headings text-lg uppercase text-white duration-150 md:text-xl xl:text-[1.625rem] hover-hover:hover:bg-white hover-hover:hover:text-blue"
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
