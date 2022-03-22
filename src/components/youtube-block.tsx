import * as React from 'react'

const YoutubeBlock: React.FC<{videoLink: any}> = ({videoLink}) => {
  return <iframe className="aspect-video w-full" src={videoLink}></iframe>
}

export default YoutubeBlock
