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
        className="ololo"
        style={{background: 'red'}}
      />
      {controls && (
        <div
          className={classNames(
            'absolute z-10 flex items-center space-x-4',
            controlsClasses,
          )}
        >
          <button
            onClick={() => setplaying(!playing)}
            className="flex items-center justify-center rounded-full text-black/70 w-14 h-14 bg-white/80"
          >
            {!playing ? (
              <IconPlay className="w-10 h-10" />
            ) : (
              <IconPause className="w-10 h-10" />
            )}
          </button>
          <button
            onClick={() => setMuted(!muted)}
            className="flex items-center justify-center rounded-full text-black/70 w-14 h-14 bg-white/80"
          >
            {!muted ? (
              <IconVolumeOn className="w-10 h-10" />
            ) : (
              <IconVolumeOff className="w-10 h-10" />
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default VideoPlayer
