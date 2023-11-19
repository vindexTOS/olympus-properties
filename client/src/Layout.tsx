import React from 'react'

import { useSelector } from 'react-redux'
import Loading from './components/Status-components/Loading'
import Success from './components/Status-components/Success'
import Error from './components/Status-components/Error'
import Nav from './components/navbar/Nav'
function Layout({ children }: { children: any }) {
  const { error, succsess, loading } = useSelector(
    (state: any) => state.AuthReducer,
  )
  return (
    <div>
      <Loading loading={loading} />
      <Success success={succsess} />
      <Error error={error} />
      <Nav />
      {children}
    </div>
  )
}

export default Layout
