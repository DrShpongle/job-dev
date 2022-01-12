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
      className={classNames(
        'object-fill object-right-bottom h-full max-w-none',
        className,
      )}
    />
  </>
)

export default VideoEmbed
