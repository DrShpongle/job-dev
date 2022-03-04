import Image from 'next/image'
import {render} from 'storyblok-rich-text-react-renderer'

import VideoPlayer from 'components/video-player'

const SeaTreesContent = ({blok}) => {
  return (
    <>
      <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src={blok.hero_image.filename}
              layout="fill"
              objectFit="cover"
              alt="SeaTrees"
            />
          </div>
        </div>
        <div className="flex 2xl:h-[329px] 2xl:w-[372px]">
          <Image
            src="/images/sea-trees-logo.png"
            width={372}
            height={329}
            alt="SeaTrees"
          />
        </div>
      </section>
      <section
        className="bg-white py-12 md:py-20 xl:py-24"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="container">
          <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
            {blok.title}
          </h3>
          <h2 className="mt-1 max-w-5xl text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            {blok.subtitle}
          </h2>
          <div className="mt-4 space-y-6 md:mt-8 md:text-xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl">
            {render(blok.text_1)}
          </div>
          <div className="mt-8 aspect-video md:mt-16 xl:mt-20 2xl:mt-24">
            <VideoPlayer url={blok.youtube_link.url} />
          </div>

          <div className="mt-8 flex flex-col items-end space-y-8 text-right md:mt-16 md:space-y-12 lg:space-y-12 xl:mt-20 xl:space-y-16 2xl:mt-24">
            <div className="space-y-5">{render(blok.text_2)}</div>
            <a
              href={blok.link_to_seatrees_website.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-pink py-2 px-6 font-headings text-lg uppercase text-white duration-150 md:py-3 md:text-xl lg:px-8 lg:text-2xl xl:px-10 xl:text-3xl hover-hover:hover:bg-blue"
            >
              visit the seatrees website
            </a>
          </div>
        </div>
        <div className="relative mt-8 flex h-[65vh] w-full md:mt-12 md:h-[85vh] xl:mt-16 2xl:mt-20">
          <Image
            src="/images/sea-trees-palms.jpg"
            layout="fill"
            objectFit="cover"
            alt="SeaTrees"
          />
        </div>
      </section>
    </>
  )
}

export default SeaTreesContent
