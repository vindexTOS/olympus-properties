import { useReducer } from 'react'
import SearchBar from './SearchBar'
import DropDown from './DropDown'
import MinMaxInput from './MinMaxInput'
function Filter() {
  const initialstate = {
    test: '',
  }

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      default:
        return { ...state }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialstate)
  const setStateAction = (type: string, state: string) => {
    dispatch({ type: type, payload: state })
  }
  return (
    <div className="w-[800px] h-[170px] py-2 rounded-[7px] bg-brand-white/80 hover:bg-brand-white flex items-center justify-around flex-col">
      <div className="flex justify-around  gap-2 ">
        <DropDown options={['1', '2']} />
        <DropDown options={['1', '2']} />
        <MinMaxInput />
        <MinMaxInput />
        <MinMaxInput />
      </div>
      <SearchBar />
    </div>
  )
}

export default Filter
