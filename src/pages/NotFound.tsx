import LinkButton from '../components/LinkButton'

function NotFound() {
  return (
    <div className="m-auto w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2">
      <LinkButton  href="/">
        Back
      </LinkButton>
      <h2 className="font-bold text-center pt-16 text-4xl">404 - Not Found</h2>
    </div>
  )
}

export default NotFound
