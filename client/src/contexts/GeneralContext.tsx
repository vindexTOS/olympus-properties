import { jwtDecode } from 'jwt-decode'
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import Cookies from 'universal-cookie'
import { UserType } from '../Types/user-types'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

type Cell = {
  adminData: UserType
}

const GeneralContext = createContext<Cell | null>(null)

export const GeneralContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const cookies = new Cookies()
  const navigation = useNavigate()
  const { token } = useSelector((state: any) => state.AuthReducer)
  const [adminData, setAdmin] = useState<UserType | any>()

  return (
    <GeneralContext.Provider value={{ adminData }}>
      {children}
    </GeneralContext.Provider>
  )
}

export const UseGeneralContext = () => {
  const context = useContext(GeneralContext)
  if (!context) {
    throw new Error('Context Not Wrapped Reload Page')
  }

  return context
}
