import React, { FC } from 'react'

type FormInputProps = {
  inputType: string
  placeholder: string
  title: string
}

const FormInput: FC<FormInputProps> = ({ inputType, placeholder, title }) => {
  const style = {
    mainDiv: `w-[100%]`,
    inputWrapper: `relative h-10 w-full min-w-[200px]`,
    input: `outline  outline-[2px] outline-brand-green/40 rounded-[5px] px-2 py-2  w-[100%]`,
    p: `text-[14px] font-bold text-brand-white ml-2`,
  }
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
