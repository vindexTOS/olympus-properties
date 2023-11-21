import { createSlice } from '@reduxjs/toolkit'
import { GetAllProductsThunk, UpdateProduct } from './Products-thunk'

const initialState = {
  data: [],
  error: '',
  succsess: '',
  loading: false,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.data = action.payload
    },
    setSuccsess: (state) => {
      state.succsess = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetAllProductsThunk.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(GetAllProductsThunk.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.succsess = 'Data Recived'
      })
      .addCase(GetAllProductsThunk.rejected, (state, action) => {
        state.loading = false
        state.error = 'Something Went Wrong'

        console.log(action.error.message)
      })
      .addCase(UpdateProduct.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(UpdateProduct.fulfilled, (state, action) => {
        state.loading = false
        state.succsess = 'Product Updated '
        console.log(action)
      })
      .addCase(UpdateProduct.rejected, (state, action) => {
        state.loading = false
        state.error = 'Cannot Be Updated'
        console.log(action)
      })
  },
})

export const { getProducts, setSuccsess } = productSlice.actions

export default productSlice.reducer
