import * as React from 'react'
import classNames from 'classnames'
import ReactPlayer from 'react-player'

import {IconPlay, IconPause, IconVolumeOn, IconVolumeOff} from 'lib/icons'

const VideoPlayer: React.FC<{
  playing?: boolean
  muted?: boolean
  externalControls?: boolean
  url: string
  playsInline?: boolean
  loop?: boolean
  controls?: boolean
  controlsClasses?: string
}> = ({
  playing,
  muted,
  externalControls,
  url,
  playsInline = true,
  loop = true,
  controls = false,
  controlsClasses = 'top-10 right-10',
}) => {
  const [innerPlaying, setInnerPlaying] = React.useState(true)
  const [innerMuted, setInnerMuted] = React.useState(true)
  return (
    <div className="video-player relative h-full">
      <ReactPlayer
        playsinline={playsInline}
        playing={externalControls ? playing : innerPlaying}
        muted={externalControls ? muted : innerMuted}
        loop={loop}
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
      {controls && (
        <div
          className={classNames(
            'absolute z-10 flex items-center space-x-2 md:space-x-4',
            controlsClasses,
          )}
        >
          <button
            onClick={() => setInnerPlaying(!innerPlaying)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black/70 md:h-14 md:w-14"
          >
            {innerPlaying ? (
              <IconPause className="h-6 w-6 md:h-10 md:w-10" />
            ) : (
              <IconPlay className="h-6 w-6 md:h-10 md:w-10" />
            )}
          </button>
          <button
            onClick={() => setInnerMuted(!innerMuted)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black/70 md:h-14 md:w-14"
          >
            {innerMuted ? (
              <IconVolumeOff className="h-6 w-6 md:h-10 md:w-10" />
            ) : (
              <IconVolumeOn className="h-6 w-6 md:h-10 md:w-10" />
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default VideoPlayer
