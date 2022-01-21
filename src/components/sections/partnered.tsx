import Image from 'next/image'
import classNames from 'classnames'

const Partnered = () => {
  return (
    <section>
      <style jsx>
        {`
          .cell-with-border {
            box-shadow: 0 0 0 1px black;
          }
        `}
      </style>
      <h3 className="text-xl md:text-3xl lg:text-[2.5rem]">
        Proud to be partnered with&hellip;
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-5 mt-4 md:mt-8 gap-[1px] p-[1px] overflow-hidden">
        {partneredLogos.map((logo, index) => {
          return (
            <a
              key={index}
              className={classNames(
                'p-4 lg:p-8 xl:p-12 2xl:p-14 cell-with-border group',
                logo.hideOnMobile ? 'hidden md:block' : 'block',
              )}
              href={logo.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative duration-300 ease-in aspect-square hover-hover:group-hover:scale-[1.15]">
                <Image
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
    </section>
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
    path: '/images/partnered/catch-surf.png',
    url: 'https://catchsurf.com/',
  },
  {
    title: 'Murf Electric Bikes',
    path: '/images/partnered/murf-electric-bikes.png',
    url: 'https://murfelectricbikes.com/',
  },
  {
    title: 'Buell Surf',
    path: '/images/partnered/buell-surf.png',
    url: 'https://buellsurf.com/',
    hideOnMobile: true,
  },
  {
    title: 'Tokoro',
    path: '/images/partnered/kerry-tokoro.png',
    url: 'http://www.tokorosurfboards.com/',
  },
  {
    title: 'Vestal Watches',
    path: '/images/partnered/vestal.png',
    url: 'https://vestalwatch.com.au/',
  },
  {
    title: 'Tools Surf Products',
    path: '/images/partnered/tools.png',
    url: 'http://www.tools-international.com/',
  },
]

export default Partnered
