import * as React from 'react'
import classNames from 'classnames'
import ReactPlayer from 'react-player'

const VideoEmbed: React.FC<{url: string; className?: string}> = ({
  url,
  className,
}) => (
  <>
    <div className="w-full h-full embed-video-wrapper">
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
            forceHLS: true,
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
