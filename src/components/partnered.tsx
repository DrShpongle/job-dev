import Link from 'next/link'
import Image from 'next/image'

const Partnered = () => {
  return (
    <div>
      <style jsx>
        {`
          .cell-with-border {
            box-shadow: 0 0 0 1px black;
          }
        `}
      </style>
      <h3 className="text-[2.5rem]">Proud to be partnered with&hellip;</h3>
      <div className="grid grid-cols-5 mt-8 gap-[1px] p-[1px] overflow-hidden">
        {partneredLogos.map((logo, index) => {
          return (
            <a
              key={index}
              className="block p-8 xl:p-12 2xl:p-14 cell-with-border group"
              href={logo.url}
              target="_blank"
            >
              <div className="relative duration-300 ease-in aspect-square group-hover:scale-125">
                <Image src={logo.path} layout="fill" objectFit="contain" />
              </div>
            </a>
          )
        })}
      </div>
    </div>
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
