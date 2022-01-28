import * as React from 'react'
import classNames from 'classnames'
import ReactPlayer from 'react-player'

const VideoEmbed: React.FC<{src: string; className?: string}> = ({
  src,
  className,
}) => (
  <>
    <div className="w-full h-full embed-video-wrapper">
      <ReactPlayer
        playsinline
        playing
        muted
        loop
        url={src}
        width="100%"
        height="100%"
      />
    </div>
    {/* <video
      src={src}
      controls={false}
      autoPlay
      loop
      muted
      playsInline
      className={classNames('object-cover w-full h-full', className)}
    /> */}
  </>
)

export default VideoEmbed
