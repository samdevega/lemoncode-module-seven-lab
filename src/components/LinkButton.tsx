import Link from "./Link"

interface LinkButtonProps {
  href: string
}

export default function LinkButton(props: React.PropsWithChildren<LinkButtonProps>) {
  const { children, href } = props

  return (
    <Link to={href} className="bg-white border-4 bg-opacity-30 cursor-pointer hover:border-orange-500 inline-block px-4 py-2">
      {children}
    </Link>
  )
}
