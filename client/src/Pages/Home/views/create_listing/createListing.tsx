import React from 'react'
import Info from './components/Info'
import Form from './components/Form'
function createListing() {
  return (
    <div className="w-[100%] h-[900px]  flex   items-center justify-around  px-20  pt-20  ">
      <Info />
      <Form />
    </div>
  )
}

export default createListing
