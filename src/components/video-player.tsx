import * as React from 'react'
import classNames from 'classnames'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull'
import Observer from '@researchgate/react-intersection-observer'
// @ts-ignore
import uuid from 'react-uuid'

import {
  IconPlay,
  IconPause,
  IconVolumeOn,
  IconVolumeOff,
  IconFullscreenOn,
  IconFullscreenOff,
} from 'lib/icons'

const VideoPlayer: React.FC<{
  playing?: boolean
  muted?: boolean
  externalControls?: boolean
  url: string
  playsInline?: boolean
  loop?: boolean
  controls?: boolean
  fullscreenControl?: boolean
  controlsClasses?: string
  handleExternalPlay?: (state: boolean) => void
  handleExternalMute?: (state: boolean) => void
}> = ({
  playing,
  muted,
  externalControls,
  url,
  playsInline = true,
  loop = true,
  controls = false,
  fullscreenControl = false,
  controlsClasses = 'top-10 right-10',
  handleExternalPlay,
  handleExternalMute,
}) => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const [innerPlaying, setInnerPlaying] = React.useState(playing)
  const [innerMuted, setInnerMuted] = React.useState(muted)
  const [isFullscreen, setIsFullscreen] = React.useState<boolean>(false)

  const handleIntersection = (event: any) => {
    if (externalControls && handleExternalPlay && handleExternalMute) {
      handleExternalPlay(event.isIntersecting)
      handleExternalMute(true)
    }
    setInnerPlaying(event.isIntersecting)
    setInnerMuted(true)
  }
  const options = {
    onChange: handleIntersection,
  }

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    if (fullscreenControl && screenfull.isEnabled) {
      screenfull.on('change', () => {
        // @ts-ignore
        setIsFullscreen(screenfull.isFullscreen)
      })
    }
  })

  const uniqueId = uuid()

  return isMounted ? (
    <Observer {...options}>
      <div className="video-player relative h-full" id={uniqueId}>
        <ReactPlayer
          className="h-full w-full"
          playsinline={playsInline}
          playing={externalControls ? playing : innerPlaying}
          muted={externalControls ? muted : innerMuted}
          loop={loop}
          url={url}
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                controls: 1,
                disablekb: 1,
                iv_load_policy: 3,
                modestbranding: 1,
                rel: 0,
              },
            },
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
            {fullscreenControl && screenfull.isEnabled && (
              <button
                onClick={() => {
                  const elem = document.getElementById(uniqueId)
                  if (elem) {
                    // @ts-ignore
                    screenfull.toggle(elem)
                  }
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black/70 md:h-10 md:w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12"
                aria-label={isFullscreen ? 'fullscreen off' : 'fullscreen on'}
              >
                {isFullscreen ? (
                  <IconFullscreenOff className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9" />
                ) : (
                  <IconFullscreenOn className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9" />
                )}
              </button>
            )}
            <button
              onClick={() => setInnerPlaying(!innerPlaying)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black/70 md:h-10 md:w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12"
              aria-label={innerPlaying ? 'pause' : 'play'}
            >
              {innerPlaying ? (
                <IconPause className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9" />
              ) : (
                <IconPlay className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9" />
              )}
            </button>
            <button
              onClick={() => setInnerMuted(!innerMuted)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black/70 md:h-10 md:w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12"
              aria-label={innerMuted ? 'volume on' : 'volume off'}
            >
              {innerMuted ? (
                <IconVolumeOff className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9" />
              ) : (
                <IconVolumeOn className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9" />
              )}
            </button>
          </div>
        )}
      </div>
    </Observer>
  ) : null
}

export default VideoPlayer
