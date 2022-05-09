import Image from 'next/image'

const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8//B+PQAIZgMgYk3sYgAAAABJRU5ErkJggg=='

const ImageWithBlur = (props: any) => (
  <Image placeholder="blur" blurDataURL={BLUR_DATA_URL} alt="" {...props} />
)

export default ImageWithBlur
