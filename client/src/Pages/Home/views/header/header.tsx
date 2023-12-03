import React from 'react'
import Filter from './components/Filter'
import { UseGeneralContext } from '../../../../contexts/GeneralContext'
function header() {
  const { homeRef } = UseGeneralContext()
  return (
    <div
      ref={homeRef}
      className="bg-brand-green/60 backdrop-blur-md w-[100%] h-[600px] flex flex-col gap-20 items-center justify-between mt-10 "
    >
      <h1 className="text-[4rem] w-[55%] font-bold text-brand-white text-center">
        The #1 site real estate professionals trust*
      </h1>
      <Filter />
    </div>
  )
}

export default header
