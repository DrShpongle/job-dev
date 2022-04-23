import * as React from 'react'
import Image from 'next/image'
import {render} from 'storyblok-rich-text-react-renderer'
import {useWindowSize} from 'react-use'

import VideoPlayer from 'components/video-player'

const TeaserHero: React.FC<any> = ({blok}) => {
  const {width} = useWindowSize()
  const [allowStoreDetails, setAllowStoreDetails] = React.useState(false)
  const [mailChimpError, setMailChimpError] = React.useState('')
  const [mailChimpSuccess, setMailChimpSuccess] = React.useState(false)
  const [onSubmitProgress, setOnSubmitProgress] = React.useState(false)
  const mounted = React.useRef(false)
  React.useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  React.useEffect(() => {
    var frm = document.forms.namedItem('mc-preregister-form')
    if (frm) {
      frm.onsubmit = async (e) => {
        let urlDat =
          'https://job-mailchimpprocessor.azurewebsites.net/api/JobMailRegistrations?code=uSo0KhuZAkaFVa1ycfNRApGVZ66byIclij21siZdPu4OqoeH71QrGg=='

        setMailChimpError('')
        setMailChimpSuccess(false)
        setOnSubmitProgress(true)
        e.preventDefault()
        var form = frm!
        if (
          form.EMAIL.value.length < 8 ||
          form.EMAIL.value.indexOf('@') === -1 ||
          !form.FNAME.value ||
          !form.LNAME.value
        ) {
          setMailChimpError('All fields must be completed!')
          setOnSubmitProgress(false)
          return
        }
        let urlParams = new URLSearchParams(window.location.search)
        let refId = urlParams.get('ref_id') || urlParams.get('refid')

        var bodyData = {
          Type: 2,
          Email: form.EMAIL.value,
          Firstname: form.FNAME.value,
          Lastname: form.LNAME.value,
          AllowStoreDetails: form.ALLOWSTORE.checked,
          RefId: refId,
        } as any
        try {
          let response = await fetch(urlDat, {
            method: 'POST',
            // mode: "no-cors",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
          })
          if (response.bodyUsed) {
            let result = await response.json()
            setMailChimpError(result)
          } else {
            setMailChimpSuccess(true)
            form.reset()
          }
          setOnSubmitProgress(false)
        } catch (ex) {
          console.log(ex)
          setOnSubmitProgress(false)
        }
      }
    }
  }, [mounted.current])

  return (
    <section
      className="pb-12 pt-24 md:pt-36 md:pb-20 xl:pt-40 xl:pb-24"
      style={{transform: 'translateZ(0)'}}
    >
      <div className="absolute inset-0 z-[-1] h-full">
        <h1 className="absolute left-0 bottom-0 text-transparent">
          Jamie O&#8217;Brien
        </h1>
        <div className="relative h-full w-full">
          <Image
            src="/images/teaser-waves.jpg"
            layout="fill"
            objectFit="cover"
            alt="Background Image"
            priority
          />
        </div>
      </div>

      <div className="container max-w-none">
        <div className="text-center">
          <h2 className="px-4 text-7xl text-white">{blok.title}</h2>
          <div className="mx-auto mt-6 max-w-6xl text-xl text-white lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
            {render(blok.subtitle)}
          </div>
        </div>
        <p className="mt-12 text-center text-2xl text-white">
          Pre-register and get in early on Jamie O&apos;Brien&apos;s surf app.
        </p>
        <form
          id="mc-preregister-form"
          name="mc-preregister-form"
          target="_blank"
          noValidate
        >
          <div className="mx-auto mt-8 flex max-w-xl flex-col space-y-6">
            <input
              type="text"
              className="h-12 w-full rounded-none px-3 md:px-5 md:text-xl 2xl:text-2xl"
              placeholder="First name"
              name="FNAME"
              id="mce-FNAME"
              aria-label="First name"
            />
            <input
              type="text"
              className="h-12 w-full rounded-none px-3 md:px-5 md:text-xl 2xl:text-2xl"
              placeholder="Last name"
              name="LNAME"
              id="mce-LNAME"
              aria-label="Last name"
            />
            <input
              type="text"
              className="h-12 w-full rounded-none px-3 md:px-5 md:text-xl 2xl:text-2xl"
              placeholder="Email"
              name="EMAIL"
              id="mce-EMAIL"
              aria-label="Email"
            />
            <div className="flex space-x-8">
              <label htmlFor="ALLOWSTORE" className="text-lg text-white">
                Add a check to agree to us storing your details. We need this to
                be able to tell you when the app is ready and we&apos;ll
                occasionally hit your inbox with the latest on JOB.
              </label>
              <div className="h-8 w-8 shrink-0 md:h-12 md:w-12">
                <input
                  title="allowStoreDetails"
                  className="absolute h-8 w-8 opacity-0 md:h-12 md:w-12"
                  type="checkbox"
                  name="group[45513][1]"
                  id="ALLOWSTORE"
                  onChange={() => setAllowStoreDetails(!allowStoreDetails)}
                  defaultChecked={allowStoreDetails}
                  aria-label="agree to us storing your details"
                />
                <div className="h-full w-full bg-white text-center">
                  {allowStoreDetails && (
                    <p className="text-3xl text-blue md:text-5xl">✓</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="h-12 w-full bg-blue text-center font-headings text-lg uppercase text-white duration-150 md:text-xl xl:text-[1.625rem] hover-hover:hover:bg-white hover-hover:hover:text-blue"
                name="subscribe"
                id="mc-embedded-subscribe"
                disabled={mailChimpSuccess}
              >
                {onSubmitProgress && <>...</>}
                {!onSubmitProgress && (
                  <>
                    {mailChimpSuccess && <>Thanks</>}
                    {mailChimpError.length > 0 && <>{mailChimpError}</>}
                    {!mailChimpSuccess && mailChimpError.length == 0 && (
                      <>Get on the list!</>
                    )}
                  </>
                )}
              </button>
              <div id="mce-responses" className="clear">
                <div id="mce-error-response" className="hidden"></div>
                <div id="mce-success-response" className="hidden"></div>
              </div>
              <div className="mailChimp-hiddenTb" aria-hidden="true">
                <input
                  type="text"
                  name="b_765fbd76204248f87d0fc2620_1367e9561a"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-16 flex h-full w-full items-center justify-center">
          <div className="relative md:w-[36rem] lg:w-[38rem] xl:w-[44rem] 2xl:w-[54rem] portrait:w-64 md:portrait:w-[36rem] lg:portrait:w-[38rem] xl:portrait:w-[44rem] 2xl:portrait:w-[54rem] landscape:w-[24rem] md:landscape:w-[36rem] lg:landscape:w-[38rem] xl:landscape:w-[44rem] 2xl:landscape:w-[54rem]">
            <div className="border-radius-fix absolute inset-2 overflow-hidden rounded-[30px] bg-[#3d3d3d] shadow-iphone md:inset-3 xl:rounded-[40px] 2xl:rounded-[50px]">
              <VideoPlayer
                playing={true}
                url={
                  isFinite(width) && width < 768
                    ? blok.video_in_the_frame_mobile.url
                    : blok.video_in_the_frame.url
                }
                controls={true}
                muted={true}
              />
            </div>
            <div className="pointer-events-none portrait:hidden md:portrait:block">
              <Image
                src="/images/iphone-frame-landscape.png"
                width={1171}
                height={580}
                alt="phone frame"
                priority
              />
            </div>
            <div className="pointer-events-none md:hidden landscape:hidden">
              <Image
                src="/images/iphone-frame-portrait.png"
                width={580}
                height={1171}
                alt="phone frame"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeaserHero
