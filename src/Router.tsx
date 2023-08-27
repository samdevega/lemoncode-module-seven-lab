import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Character from './pages/Character'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function Router() {
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: "/"
    },
    {
      element: <Character />,
      path: "character/:slug",
    },
    {
      element: <NotFound />,
      path: "*"
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default Router
