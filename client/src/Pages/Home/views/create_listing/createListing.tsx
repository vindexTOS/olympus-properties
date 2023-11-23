import React from 'react'
import Info from './components/Info'
import Form from './components/Form'
function createListing() {
  return (
    <div className="w-[100%] h-[900px] bg-brand-green/50 flex flex-col items-center justify-around p-6 pt-20  ">
      <Info />
      <Form />
    </div>
  )
}

export default createListing
