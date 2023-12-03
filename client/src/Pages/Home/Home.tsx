import React from 'react'
import Hero from '../../components/Hero/Hero'
import Header from './views/header/header'
import PropertysList from './views/products/products'
import CreateListing from './views/create_listing/createListing'
function Home() {
  return (
    <div className="  flex  flex-col  items-center justify-center">
      <Header />
      <PropertysList />
      <CreateListing />
    </div>
  )
}

export default Home
