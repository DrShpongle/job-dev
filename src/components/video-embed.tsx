import React from 'react'
import classNames from 'classnames'

const VideoEmbed: React.FC<{src: string; className?: string}> = ({
  src,
  className,
}) => (
  <>
    {/* <style jsx>
      {`
        .video-responsive {
          overflow: hidden;
          padding-bottom: 56.25%;
          position: relative;
          height: 0;
        }
        .video-responsive video {
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          position: absolute;
        }
      `}
    </style> */}
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
