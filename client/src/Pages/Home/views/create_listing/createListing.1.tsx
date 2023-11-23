import React from 'react'
import Info from './components/Info'

export function createListing() {
  return (
    <div className="w-[100%] h-[900px] bg-brand-green/50  ">
      <Info />
      <Form />
    </div>
  )
}
