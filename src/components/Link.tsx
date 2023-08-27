import { Link as RouterLink } from "react-router-dom"

interface LinkProps {
  className?: string
  to: string
}

function Link(props: React.PropsWithChildren<LinkProps>) {
  const baseUrl = import.meta.env.BASE_URL
  const { children, className, to } = props

  return (
    <RouterLink to={baseUrl + to} className={className}>
      {children}
    </RouterLink>
  )
}

export default Link
