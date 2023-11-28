import React, { useState } from 'react'
import FormInput from '../../../../../components/Inputs/FormInput'
import FormDropDown from '../../../../../components/Inputs/FormDropDown'
import ImageUploader from '../../../../../components/Inputs/ImageUpload'
import Textarea from '../../../../../components/Inputs/Textarea'
import { UseLanguageContext } from '../../../../../contexts/LanguageContext'
import { CreatePropertyThunk } from '../../../../../Redux/Property/property-thunk'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { getError } from '../../../../../Redux/Property/property-slice'
export type SelectorType = {
  target: {
    name: string
    value: string
  }
}

function Form() {
  const { translation, refrenceData } = UseLanguageContext()
  const { form } = translation
  const { userInfo, titles, propertyInfo } = form
  const style = {
    mainDiv: `bg-[#26a59a]/95 w-[60%]  h-[930px]  rounded-r-[9px] flex-col flex p-5 gap-5`,
    userInfo: ` flex flex-col items-center gap-4`,
    userInfoInputWrapper: 'flex  gap-1 justify-around w-[100%]',
    propertyInfo: `flex flex-col gap-5 `,
    propertyDropDowns: `flex gap-2 `,
  }
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const [images, setImages] = useState<any>([])
  const [propertyForm, setpropertyForm] = useState({
    email: '',
    number: '',
    firstName: '',
    lastName: '',
    location: '',
    feature: '',
    propertyType: '',
    price: '',
    sqArea: '',
    buildYear: '',
    title: '',
    description: '',
  })
  const handleChange = (
    e: SelectorType | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setpropertyForm((prevData) => ({ ...prevData, [name]: value }))
  }

  const HandleSubmit = () => {
    const emptyFields = Object.entries(propertyForm).filter(
      ([key, value]) => !value,
    )
    if (emptyFields.length > 0) {
      dispatch(
        getError(
          `'Error: The following fields are required:',
        ${emptyFields.map(([key]) => key).join(', ')},`,
        ),
      )
      setTimeout(() => {
        dispatch(getError(''))
      }, 4000)
    } else {
      console.log(propertyForm)
      dispatch(CreatePropertyThunk(propertyForm))
    }
  }
  return (
    <div className={style.mainDiv}>
      <div className={style.userInfo}>
        <h1 className="text-[1.6rem] font-bold text-brand-white font-geo ">
          {titles.formHeader1}
        </h1>
        <div className={style.userInfoInputWrapper}>
          <div className="w-[90%]">
            <FormInput
              handleChange={handleChange}
              title={userInfo.email}
              name="email"
              placeholder="test"
              inputType="text"
            />
            <FormInput
              handleChange={handleChange}
              title={userInfo.number}
              name="number"
              placeholder="test"
              inputType="text"
            />
          </div>
          <div className="w-[90%]">
            <FormInput
              handleChange={handleChange}
              name="firstName"
              title={userInfo.firstName}
              placeholder="test"
              inputType="text"
            />
            <FormInput
              handleChange={handleChange}
              name="lastName"
              title={userInfo.lastName}
              placeholder="test"
              inputType="text"
            />
          </div>
        </div>
      </div>
      <h1 className="w-[100%] text-center text-[1.6rem] font-bold text-brand-white font-geo">
        {titles.formHeader2}
      </h1>
      <FormInput
        handleChange={handleChange}
        name="title"
        title={propertyInfo.title}
        placeholder="test"
        inputType="text"
      />
      <Textarea
        name="description"
        title={propertyInfo.desc}
        handleChange={handleChange}
      />
      <div className={style.propertyInfo}>
        <div className={style.propertyDropDowns}>
          <FormDropDown
            name="location"
            handleChange={handleChange}
            data={refrenceData.location.data}
            title={propertyInfo.location}
          />
          <FormDropDown
            name="feature"
            handleChange={handleChange}
            data={refrenceData.featureType.data}
            title={propertyInfo.feature}
          />
          <FormDropDown
            name="propertyType"
            handleChange={handleChange}
            data={refrenceData.propertyType.data}
            title={propertyInfo.propertyType}
          />
        </div>
        <div className={style.propertyDropDowns}>
          <FormInput
            handleChange={handleChange}
            name="price"
            title={propertyInfo.price}
            placeholder="test"
            inputType="text"
          />
          <FormInput
            handleChange={handleChange}
            name="sqArea"
            title={propertyInfo.sqArea}
            placeholder="test"
            inputType="text"
          />

          <FormInput
            handleChange={handleChange}
            name="buildYear"
            title={propertyInfo.buildYear}
            placeholder="test"
            inputType="text"
          />
        </div>
      </div>
      <h1 className="w-[100%] text-center text-[1.6rem] font-bold text-brand-white font-geo">
        {titles.formHeader3}
      </h1>
      <ImageUploader images={images} setImages={setImages} />
      <button
        onClick={HandleSubmit}
        className="bg-brand-yellow hover:bg-brand-yellow/95 text-brand-white font-bold py-2 px-4 rounded"
      >
        {propertyInfo.submit}
      </button>
    </div>
  )
}

export default Form
