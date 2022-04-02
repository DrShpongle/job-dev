import * as React from 'react'
import ReactPlayer from 'react-player'

const VideoEmbed: React.FC<{url: string; className?: string}> = ({url}) => (
  <>
    <div className="embed-video-wrapper relative h-full w-full">
      <ReactPlayer
        playsinline
        playing
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
  </>
)

export default VideoEmbed
