import React, { FC, useState } from 'react'
import useOutClick from '../../hooks/useOutClick'
import { RiArrowDropUpFill, RiArrowDropDownFill } from 'react-icons/ri'

type FormDropDownProps = {
  data: string[]
  title: string
}

const FormDropDown: FC<FormDropDownProps> = ({ data, title }) => {
  const style = {
    mainDiv: ` relative    w-[100%]   max_smm:right-0  max_xl:w-[15rem] `,
    inputWrapper: `relative h-10 w-full    max_xl:w-[15rem]`,
    input: `peer text-[#ef4a75] shadow-md h-[3rem] w-[100%]    max_xl:w-[15rem] rounded-[7px] border r   border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ef4a75] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`,
    p: `text-[12px] text-gray-700 ml-2`,
    inputDivWrapper: `flex items-center justify-center   max_xl:relative    `,
    arrowDiv: `flex items-center justify-around z-40 mt-2 absolute  text-[2rem] right-0 cursor-pointer   max_xl:absolute max_xl:right-1`,
    mappedDiv: `  absolute top-[3rem] bg-brand-white shadow-md  w-[100%] z-50 overflow-y-scroll  element-without-scrollbar  max-h-[200px] items-center flex flex-col rounded-b-[9px]  rounded-t-[6px] boxshaddow `,
    selectItem: `hover:bg-gray-200 h-[2rem] hover:text-gray-800 w-[100%] rounded-[5px] cursor-pointer flex items-center justify-center`,
  }

  const [dropDown, setDropDown] = useState(false)
  const dropDownRef = React.useRef() as any
  const handleDropDownCancle = () => {
    setDropDown(false)
  }
  useOutClick(dropDownRef, handleDropDownCancle)

  return (
    <div ref={dropDownRef} className={style.mainDiv}>
      <p className={style.p}>{title}</p>

      <div
        onClick={() => setDropDown(!dropDown)}
        className={style.inputDivWrapper}
      >
        <div className={style.inputWrapper}>
          <div className={style.input}></div>
        </div>
        <div className={style.arrowDiv} onClick={() => setDropDown(!dropDown)}>
          {dropDown ? <RiArrowDropUpFill /> : <RiArrowDropDownFill />}
        </div>
      </div>

      {dropDown && (
        <div className={style.mappedDiv}>
          {data.map((val, i) => {
            return (
              <div key={i} className={style.selectItem}>
                {val}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default FormDropDown
