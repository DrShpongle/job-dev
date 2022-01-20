import * as React from 'react'
import classNames from 'classnames'
import ReactPlayer from 'react-player'

import {IconPlay, IconPause, IconVolumeOn, IconVolumeOff} from 'lib/icons'

const VideoPlayer: React.FC<{
  url: string
  playsInline?: boolean
  playing?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  controlsClasses?: string
}> = ({
  url,
  playsInline = true,
  loop = true,
  controls = false,
  controlsClasses = 'top-10 right-10',
}) => {
  const [playing, setplaying] = React.useState(true)
  const [muted, setMuted] = React.useState(true)
  return (
    <div className="relative">
      <ReactPlayer
        playsinline={playsInline}
        playing={playing}
        muted={muted}
        loop={loop}
        url={url}
        width="100%"
        height="100%"
      />
      {controls && (
        <div
          className={classNames(
            'absolute z-10 flex items-center space-x-2 md:space-x-4',
            controlsClasses,
          )}
        >
          <button
            onClick={() => setplaying(!playing)}
            className="flex items-center justify-center w-8 h-8 rounded-full text-black/70 md:w-14 md:h-14 bg-white/80"
          >
            {!playing ? (
              <IconPlay className="w-6 h-6 md:w-10 md:h-10" />
            ) : (
              <IconPause className="w-6 h-6 md:w-10 md:h-10" />
            )}
          </button>
          <button
            onClick={() => setMuted(!muted)}
            className="flex items-center justify-center w-8 h-8 rounded-full text-black/70 md:w-14 md:h-14 bg-white/80"
          >
            {!muted ? (
              <IconVolumeOn className="w-6 h-6 md:w-10 md:h-10" />
            ) : (
              <IconVolumeOff className="w-6 h-6 md:w-10 md:h-10" />
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default VideoPlayer
