import React from 'react'
import Info from './components/Info'
import Form from './components/Form'
import { UseGeneralContext } from '../../../../contexts/GeneralContext'
function createListing() {
  return (
    <div className="w-[100%] h-[1200px] max_xl:flex-col  bg-brand-green/60 backdrop-blur-md  flex   items-center justify-around  px-20  pt-40   ">
      <Info />
      <Form />
    </div>
  )
}

export default createListing
