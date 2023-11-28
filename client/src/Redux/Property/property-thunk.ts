import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import { TPropertyTypes } from '../../Types/propertyTypes'

export const CreatePropertyThunk = createAsyncThunk(
  'creatProperty/post',
  async (obj: TPropertyTypes) => {
    console.log(obj)
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}property`,
        { ...obj },
      )

      return res.data
    } catch (error) {
      const err: any = error
      throw new Error(err.response.data.message)
    }
  },
)

export const GetAllpropertysThunk = createAsyncThunk(
  'allpropertys/get',
  async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}property`,
      )
      return res.data
    } catch (error) {
      throw new Error('ERROR')
    }
  },
)

export const Updateproperty = createAsyncThunk(
  'property/update',
  async (obj: TPropertyTypes) => {
    // try {
    //   const res = await axios.patch(
    //     `${import.meta.env.VITE_BASE_API_URL}property/${obj.id}`,
    //     { ...obj.data },
    //   )
    //   return res.data
    // } catch (error) {
    //   throw new Error('ERROR')
    // }
  },
)
