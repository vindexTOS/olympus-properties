import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginThunk, RegistrationThunk } from './Auth-thunk'
const initialState = {
  email: '',
  password: '',
  token: '',
  error: '',
  succsess: '',
  loading: false,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getEmail: (state, action) => {
      state.email = action.payload
    },
    getPassword: (state, action) => {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginThunk.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(LoginThunk.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload
        state.succsess = 'user has logged in'
      })
      .addCase(LoginThunk.rejected, (state, action) => {
        state.loading = false
        state.error = 'Something Went Wrong'
        console.log(action.error.message)
      })
      .addCase(RegistrationThunk.pending, (state) => {
        state.loading = true
        state.error = ''
      })
      .addCase(RegistrationThunk.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload
        state.succsess = 'user has been registered'
      })
      .addCase(RegistrationThunk.rejected, (state, action) => {
        state.loading = false
        state.error = 'Something Went Wrong'
        console.log(action.error.message)
      })
  },
})

export const { getEmail, getPassword } = AuthSlice.actions

export default AuthSlice.reducer
