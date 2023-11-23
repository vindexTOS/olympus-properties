import React from 'react'
import FormInput from '../../../../../components/Inputs/FormInput'
import FormDropDown from '../../../../../components/Inputs/FormDropDown'
import ImageUploader from '../../../../../components/Inputs/ImageUpload'
import Textarea from '../../../../../components/Inputs/Textarea'
import { UseLanguageContext } from '../../../../../contexts/LanguageContext'
function Form() {
  const { translation } = UseLanguageContext()
  const { form } = translation
  const { userInfo } = form
  const style = {
    mainDiv: `bg-brand-white w-[90%] h-[700px] rounded-[9px] flex-col flex p-5 gap-7`,
    userInfo: ` flex flex-col items-center gap-4`,
    userInfoInputWrapper: 'flex gap-1',
  }
  return (
    <div className={style.mainDiv}>
      <div className={style.userInfo}>
        <h1 className="text-[1.2rem] font-bold">თქვენი პირადი მონაცემები</h1>
        <div className={style.userInfoInputWrapper}>
          <FormInput
            title={userInfo.email}
            placeholder="test"
            inputType="text"
          />
          <FormInput
            title={userInfo.number}
            placeholder="test"
            inputType="text"
          />
          <FormInput
            title={userInfo.firstName}
            placeholder="test"
            inputType="text"
          />
          <FormInput
            title={userInfo.lastName}
            placeholder="test"
            inputType="text"
          />
        </div>
      </div>
      <FormDropDown data={['1', '2', '3']} title="drop down" />
      <ImageUploader />
      <Textarea title="decription" />
    </div>
  )
}

export default Form
