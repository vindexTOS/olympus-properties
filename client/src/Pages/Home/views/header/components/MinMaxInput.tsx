import React from 'react'

function MinMaxInput() {
  return (
    <div className="rounded-md shadow-sm w-[120px]   flex items-center justify-between">
      <input
        placeholder="min"
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-brand-white border border-transparent rounded-[20px] active:bg-gray-100 focus:outline-none focus:border-gray-200 focus:shadow-outline-indigo hover:bg-gray-400"
      />
    </div>
  )
}

export default MinMaxInput
