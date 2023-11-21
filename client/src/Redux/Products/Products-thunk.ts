import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductUpdateType } from '../../Types/product-types'
import axios from 'axios'

export const GetAllProductsThunk = createAsyncThunk(
  'allproducts/get',
  async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_API_URL}product`)
      return res.data
    } catch (error) {
      throw new Error('ERROR')
    }
  },
)

export const UpdateProduct = createAsyncThunk(
  'product/update',
  async (obj: ProductUpdateType) => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_API_URL}product/${obj.id}`,
        { ...obj.data },
      )

      return res.data
    } catch (error) {
      throw new Error('ERROR')
    }
  },
)
