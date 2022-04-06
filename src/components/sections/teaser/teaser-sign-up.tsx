import * as React from 'react'
import Image from 'next/image'

const TeaserSignUp: React.FC<any> = ({blok}) => {
  var [allowStoreDetails, setAllowStoreDetails] = React.useState(false)
  var [mailChimpError, setMailChimpError] = React.useState('')
  var [mailChimpSuccess, setMailChimpSuccess] = React.useState(false)
  var [onSubmitProgress, setOnSubmitProgress] = React.useState(false)
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
      className="flex flex-col items-center justify-center bg-pink py-12 md:py-20 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container flex flex-col justify-center">
        <div>
          <h3 className="font-accented text-5xl text-white">Need The App?</h3>
          <h2 className="mt-1 max-w-4xl text-7xl leading-none text-white">
            Drop us your deets
          </h2>
          <p className="pt-4 text-2xl text-white">
            Pre-register and get in early on Jamie O&apos;Brien&apos;s surf app.
          </p>
        </div>
        <form
          id="mc-preregister-form"
          name="mc-preregister-form"
          target="_blank"
          noValidate
        >
          <div className="grid grid-cols-1 pt-4 md:grid-cols-3">
            <div>
              <input
                type="text"
                className="h-[48px] w-full rounded-none md:px-5 md:text-xl 2xl:text-2xl"
                placeholder="Jamie"
                name="FNAME"
                id="mce-FNAME"
              />
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <input
                type="text"
                className="h-[48px] w-full rounded-none md:px-5 md:text-xl 2xl:text-2xl"
                placeholder="O'Brien"
                name="LNAME"
                id="mce-LNAME"
              />
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <input
                type="text"
                className="h-[48px] w-full rounded-none md:px-5 md:text-xl 2xl:text-2xl"
                placeholder="legend@job.com"
                name="EMAIL"
                id="mce-EMAIL"
              />
            </div>
            <div className="flex pt-4 md:col-span-2">
              <div>
                <label htmlFor="ALLOWSTORE" className="text-lg text-white">
                  Add a check to agree to us storing your details. We need this
                  to be able to tell you when the app is ready and we&apos;ll
                  occasionally hit your inbox with the latest on JOB.
                </label>
              </div>
              <div className="h-[48px] w-[48px] shrink-0">
                <input
                  title="allowStoreDetails"
                  className="absolute h-[48px] w-[48px] opacity-0"
                  type="checkbox"
                  name="group[45513][1]"
                  id="ALLOWSTORE"
                  onChange={() => setAllowStoreDetails(!allowStoreDetails)}
                  defaultChecked={allowStoreDetails}
                />
                <div className="h-full w-full bg-white text-center">
                  {allowStoreDetails && <p className="text-5xl text-blue">✓</p>}
                </div>
              </div>
            </div>
            <div className="pt-4 md:pl-4">
              <button
                type="submit"
                className="h-[48px] w-full bg-blue text-center font-headings text-lg uppercase text-white duration-150 md:text-xl xl:text-[1.625rem] hover-hover:hover:bg-white hover-hover:hover:text-blue"
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
        <div className="pt-12">
          <Image
            width="1920"
            height="1000"
            layout="responsive"
            src="/images/teaser-sign-up.jpg"
          />
        </div>
      </div>
    </section>
  )
}

export default TeaserSignUp
