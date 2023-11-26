import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Auth/Auth-slice'
import propertyReducer from './Property/property-slice'
const store = configureStore({
  reducer: { AuthReducer, propertyReducer },
})

export default store
