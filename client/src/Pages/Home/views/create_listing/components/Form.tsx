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
    mainDiv: `bg-[#26a59a]/95 w-[60%] h-[930px] rounded-r-[9px] flex-col flex p-5 gap-7`,
    userInfo: ` flex flex-col items-center gap-4`,
    userInfoInputWrapper: 'flex  gap-1 justify-around w-[100%]',
    propartyInfo: `flex flex-col gap-5 `,
    propartyDropDowns: `flex gap-2 `,
  }
  return (
    <div className={style.mainDiv}>
      <div className={style.userInfo}>
        <h1 className="text-[1.6rem] font-bold text-brand-white font-geo ">
          თქვენი პირადი მონაცემები
        </h1>
        <div className={style.userInfoInputWrapper}>
          <div className="w-[90%]">
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
          </div>
          <div className="w-[90%]">
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
      </div>
      <div className={style.propartyInfo}>
        <h1 className="w-[100%] text-center text-[1.6rem] font-bold text-brand-white font-geo">
          ინფორმაცია საკუთრებაზე
        </h1>
        <div className={style.propartyDropDowns}>
          <FormDropDown data={['1', '2', '3']} title="drop down" />
          <FormDropDown data={['1', '2', '3']} title="drop down" />
          <FormDropDown data={['1', '2', '3']} title="drop down" />
        </div>
        <div className={style.propartyDropDowns}>
          <FormInput
            title={userInfo.lastName}
            placeholder="test"
            inputType="text"
          />
          <FormInput
            title={userInfo.lastName}
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
      <Textarea title="decription" />

      <h1 className="w-[100%] text-center text-[1.6rem] font-bold text-brand-white font-geo">
        დაამატეთ საკუთრების ფოტოები
      </h1>
      <ImageUploader />
    </div>
  )
}

export default Form
