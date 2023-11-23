import React from 'react'
import Hero from '../../components/Hero/Hero'
import Header from './views/header/header'
import Products from './views/products/products'
import CreateListing from './views/create_listing/createListing'
function Home() {
  return (
    <div className="">
      <Header />
      <Products />
      <CreateListing />
    </div>
  )
}

export default Home
