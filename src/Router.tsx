import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Character from './pages/Character'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function Router() {
  const baseUrl = import.meta.env.BASE_URL
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: baseUrl
    },
    {
      element: <Character />,
      path: `${baseUrl}character/:slug`
    },
    {
      element: <NotFound />,
      path: `${baseUrl}*`
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default Router
