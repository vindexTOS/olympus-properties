import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Login from './Pages/Admin/Login'
import Home from './Pages/Home/Home'
import SingePage from './Pages/SinglePage/SingePage'
function App() {
  const router = [
    {
      path: '/',
      element: <Home />,
      outlet: [],
    },
    { path: '/property/:id', element: <SingePage /> },
    { path: '/admin', element: <Login /> },
  ]

  type ReactRouteType = {
    path: string
    element: JSX.Element
    outlet?: ReactRouteType[]
  }

  return (
    <Layout>
      <Routes>
        {router.map((route: ReactRouteType) => {
          const { path, element, outlet } = route
          if (outlet) {
            return (
              <Route key={path} path={path} element={element}>
                {outlet.map((outletRoute) => {
                  const { path, element } = outletRoute
                  return <Route key={path} path={path} element={element} />
                })}
              </Route>
            )
          } else {
            return <Route key={path} path={path} element={element} />
          }
        })}
      </Routes>
    </Layout>
  )
}

export default App
