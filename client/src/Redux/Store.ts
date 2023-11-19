import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Auth/Auth-slice'
import ProductReducer from './Products/Products-slice'
const store = configureStore({
  reducer: { AuthReducer, ProductReducer },
})

export default store
