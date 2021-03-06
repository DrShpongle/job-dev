import classNames from 'classnames'

import ImageWithBlur from 'components/image-with-blur'

const Partnered = () => {
  return (
    <>
      <style jsx>
        {`
          .cell-with-border {
            box-shadow: 0 0 0 1px black;
          }
        `}
      </style>
      <section
        className="bg-white pt-12 pb-8 md:py-16 xl:pt-24 xl:pb-16"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="container">
          <h3 className="text-xl md:text-3xl lg:text-[2.5rem]">
            Proud to be partnered with&hellip;
          </h3>
          <div className="mt-4 grid grid-cols-3 gap-[1px] p-[1px] md:mt-8 md:grid-cols-5">
            {partneredLogos.map((logo, index) => {
              return (
                <a
                  key={index}
                  className={classNames(
                    'cell-with-border group p-4 lg:p-8 xl:p-12 2xl:p-14',
                    logo.hideOnMobile ? 'hidden md:block' : 'block',
                  )}
                  href={logo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="relative aspect-square duration-300 ease-in hover-hover:group-hover:scale-[1.15]">
                    <ImageWithBlur
                      src={logo.path}
                      layout="fill"
                      objectFit="contain"
                      alt={logo.title}
                    />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

const partneredLogos = [
  {
    title: 'Red Bull',
    path: '/images/partnered/red-bull.svg',
    url: 'https://www.redbull.com/',
  },
  {
    title: 'Blenders Eyewear',
    path: '/images/partnered/blenders-eyewear.svg',
    url: 'https://www.blenderseyewear.com/',
  },
  {
    title: 'GoPro',
    path: '/images/partnered/gopro-hero.svg',
    url: 'https://gopro.com/',
  },
  {
    title: 'Cariuma',
    path: '/images/partnered/cariuma.svg',
    url: 'https://cariuma.com/',
  },
  {
    title: 'Catch Surf',
    path: '/images/partnered/catch-surf.webp',
    url: 'https://catchsurf.com/',
  },
  {
    title: 'Murf Electric Bikes',
    path: '/images/partnered/murf-electric-bikes.webp',
    url: 'https://murfelectricbikes.com/',
  },
  {
    title: 'Buell Surf',
    path: '/images/partnered/buell-surf.webp',
    url: 'https://buellsurf.com/',
    hideOnMobile: true,
  },
  {
    title: 'Tokoro',
    path: '/images/partnered/kerry-tokoro.webp',
    url: 'http://www.tokorosurfboards.com/',
  },
  {
    title: 'Carver',
    path: '/images/partnered/carver.webp',
    url: 'https://carverskateboards.com/',
  },
  {
    title: 'Tropic Sport',
    path: '/images/partnered/tropic.webp',
    url: 'https://tropicsport.com/',
  },
]

export default Partnered
