import React from 'react'
import classNames from 'classnames'

const VideoEmbed: React.FC<{src: string; className?: string}> = ({
  src,
  className,
}) => (
  <>
    <video
      src={src}
      controls={false}
      autoPlay
      loop
      muted
      playsInline
      className={classNames('object-cover w-full h-full', className)}
    />
  </>
)

export default VideoEmbed
