interface ImageProps {
  alt?: string
  className?: string
  height?: string | number
  sizes?: string
  src?: string
  title?: string
  width?: string | number
}

function Image(props: ImageProps) {
  const baseUrl = import.meta.env.BASE_URL
  const { src, ...rest } = props

  return (
    <img src={baseUrl + src} {...rest} />
  )
}

export default Image
