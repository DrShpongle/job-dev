import * as React from 'react'
import ReactPlayer from 'react-player'
import Observer from '@researchgate/react-intersection-observer'

const VideoEmbed: React.FC<{
  url: string
}> = ({url}) => {
  // const [playing, setPlaying] = React.useState(false)
  // const handleIntersection = (event: any) => {
  //   setPlaying(event.isIntersecting)
  // }
  // const options = {
  //   onChange: handleIntersection,
  // }
  return (
    // <Observer {...options}>
    <div className="embed-video-wrapper relative h-full w-full">
      <ReactPlayer
        playsinline
        // TODO
        // playing={playing}
        playing={true}
        muted
        loop
        url={url}
        width="100%"
        height="100%"
        config={{
          file: {
            hlsOptions: {
              abrBandWidthUpFactor: 0.5,
              startLevel: 3,
            },
          },
        }}
      />
    </div>
    // </Observer>
  )
}

export default VideoEmbed
