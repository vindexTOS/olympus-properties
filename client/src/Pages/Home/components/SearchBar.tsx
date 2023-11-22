import React from 'react'
import { CiSearch } from 'react-icons/ci'

function SearchBar() {
  return (
    <div className="bg-brand-dark-1 h-[50px] w-[80%] rounded-[80px] flex items-center justify-between  px-2 ">
      <input
        className="bg-brand-dark-1/40  text-brand-white h-[90%] rounded-[100px] w-[100%] outline-none"
        placeholder="serach..."
      />
      <div className="bg-brand-white flex items-center justify-center rounded-[50%] w-[50px] h-[85%] ">
        <CiSearch className="text-[1.5rem] hover:scale-[1.2] cursor-pointer" />
      </div>
    </div>
  )
}

export default SearchBar
