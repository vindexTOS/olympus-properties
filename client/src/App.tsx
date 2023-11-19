import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'

function App() {
  const router = [
    {
      path: '/',
      element: <div className="bg-red-600 w-[100%] h-[200px]">hello</div>,
      // outlet: [{ path: 'products', element: <Products /> }],
    },
    // { path: '/login', element: <Login /> },
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
