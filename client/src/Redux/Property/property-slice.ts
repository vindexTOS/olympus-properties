import { createSlice } from '@reduxjs/toolkit'
import {
  CreatePropertyThunk,
  GetAllpropertysThunk,
  Updateproperty,
} from './property-thunk'

const initialState = {
  data: [],
  userID: '',
  error: '',
  succsess: '',
  loading: false,
}

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    getpropertys: (state, action) => {
      state.data = action.payload
    },
    setSuccsess: (state) => {
      state.succsess = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreatePropertyThunk.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(CreatePropertyThunk.fulfilled, (state, action) => {
        state.loading = false
        console.log(action)
        state.succsess = 'Your property has been submited'
      })
      .addCase(CreatePropertyThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'something went wrong'
      })
      .addCase(GetAllpropertysThunk.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(GetAllpropertysThunk.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.succsess = 'Data Recived'
      })
      .addCase(GetAllpropertysThunk.rejected, (state, action) => {
        state.loading = false
        state.error = 'Something Went Wrong'

        console.log(action.error.message)
      })
      .addCase(Updateproperty.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(Updateproperty.fulfilled, (state, action) => {
        state.loading = false
        state.succsess = 'property Updated '
        console.log(action)
      })
      .addCase(Updateproperty.rejected, (state, action) => {
        state.loading = false
        state.error = 'Cannot Be Updated'
        console.log(action)
      })
  },
})

export const { getpropertys, setSuccsess } = propertySlice.actions

export default propertySlice.reducer
