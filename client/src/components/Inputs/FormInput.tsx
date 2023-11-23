import React, { FC } from 'react'

type FormInputProps = {
  inputType: string
  placeholder: string
  title: string
}
const style = {
  mainDiv: `w-full`,
  inputWrapper: `relative h-10 w-full min-w-[200px]`,
  input: `peer text-[#ef4a75] shadow-md h-[3rem] w-[20rem] max_xl:w-[15rem] rounded-[7px] border r  border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#ef4a75] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`,
  p: `text-[12px] text-gray-700 ml-2`,
}

const FormInput: FC<FormInputProps> = ({ inputType, placeholder, title }) => {
  return (
    <div className={style.mainDiv}>
      <p className={style.p}>{title}</p>
      <div className={style.inputWrapper}>
        <input type={inputType ? inputType : 'text'} className={style.input} />
      </div>
    </div>
  )
}

export default FormInput
