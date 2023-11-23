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
  setLang: React.Dispatch<React.SetStateAction<boolean>>
  lang: boolean
  translation: any
  refrenceData: any
}

const LanguageContext = createContext<Cell | null>(null)

export const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [lang, setLang] = useState<boolean>(false)

  let translation = {
    form: {
      userInfo: {
        email: lang ? 'ემაილი' : 'Email',
        number: lang ? 'ტელეფონის ნომერი' : 'Phone Number',
        firstName: lang ? 'სახელი' : 'First Name',
        lastName: lang ? 'გვარი' : 'Last Name',
      },
    },
  }
  let refrenceData = {
    featureType: {
      data: [
        { title: lang ? 'იყიდება' : 'Sale', key: 'sale' },
        { title: lang ? 'ქირავდება' : 'rent', key: 'rent' },
      ],
    },
    propertyType: {
      data: [
        { title: lang ? 'კერძო სახლი' : 'Home', key: 'home' },
        { title: lang ? 'ბინა' : 'Apartments', key: 'apartments' },
        { title: lang ? 'საოფისე ფართი' : 'Office', key: 'office' },
        {
          title: lang ? 'კომერციული ფართი' : 'Commercial Space',
          key: 'commercial space',
        },
      ],
    },
    location: {
      data: [
        { title: lang ? 'თბილისი' : 'Tbilisi', key: 'tbilisi' },
        { title: lang ? 'ქუთაისი' : 'Kutaisi', key: 'kutaisi' },
        { title: lang ? 'ბათუმი' : 'Batumi', key: 'batumi' },
        { title: lang ? 'რუსთავი' : 'Rustavi', key: 'rustavi' },
        { title: lang ? 'ზუგდიდი' : 'Zugdidi', key: 'zugdidi' },
        { title: lang ? 'საჩხერე' : 'Sachkhere', key: 'sachkhere' },
        { title: lang ? 'ქობულეთი' : 'Kobuleti', key: 'kobuleti' },
        { title: lang ? 'სიღნაღი' : 'Signagi', key: 'signagi' },
        { title: lang ? 'ბორჯომი' : 'Borjomi', key: 'borjomi' },
        { title: lang ? 'ახალტაბახი' : 'Akhaltsikhe', key: 'akhaltsikhe' },
        { title: lang ? 'მცხეთა' : 'Mtskheta', key: 'mtskheta' },
        { title: lang ? 'მარნეული' : 'Marnueli', key: 'marnueli' },
        { title: lang ? 'წყალტუბო' : 'Tsalkubo', key: 'tsalkubo' },
        { title: lang ? 'დუშეთი' : 'Dusheti', key: 'dusheti' },
        { title: lang ? 'ბაღდათი' : 'Bagdati', key: 'bagdati' },
        { title: lang ? 'წალკა' : 'Tsalka', key: 'tsalka' },
        { title: lang ? 'თეთრელი' : 'Tetritskaro', key: 'tetritskaro' },
        { title: lang ? 'თელავი' : 'Telavi', key: 'telavi' },
        { title: lang ? 'თიანეთი' : 'Tianeti', key: 'tianeti' },
        { title: lang ? 'ზარე' : 'Zare', key: 'zare' },
        { title: lang ? 'მარტვილი' : 'Martvili', key: 'martvili' },
        {
          title: lang ? 'ნინო ემგარულის' : 'Nino Eemgarulis',
          key: 'nino-eemgarulis',
        },
        {
          title: lang ? 'თბილისი სამებარულო' : 'Tbilisi Samebarulo',
          key: 'tbilisi-samebarulo',
        },
        { title: lang ? 'ქობულეთი' : 'Kobuleti', key: 'kobuleti' },
        { title: lang ? 'ფოთი' : 'Poti', key: 'poti' },
        { title: lang ? 'წყალტუბო' : 'Tsalkubo', key: 'tsalkubo' },
        { title: lang ? 'დუშეთი' : 'Dusheti', key: 'dusheti' },
        { title: lang ? 'ბაღდათი' : 'Bagdati', key: 'bagdati' },
        { title: lang ? 'გორი' : 'Gori', key: 'gori' },
        { title: lang ? 'ხაშური' : 'Khachuri', key: 'khachuri' },
        { title: lang ? 'ხონი' : 'Khoni', key: 'khoni' },
        { title: lang ? 'ზესტაფონი' : 'Zestafoni', key: 'zestafoni' },
        { title: lang ? 'გურჯაანი' : 'Gurjaani', key: 'gurjaani' },
        { title: lang ? 'წალენჯიხა' : 'Tsalenjikha', key: 'tsalenjikha' },
        { title: lang ? 'წყალტუბო' : 'Tsalkubo', key: 'tsalkubo' },
        { title: lang ? 'მარნეული' : 'Marnueli', key: 'marnueli' },
        {
          title: lang ? 'დედოფლისწყარო' : 'Dedoplistsqaro',
          key: 'dedoplistsqaro',
        },
        { title: lang ? 'წყალტუბო' : 'Tsalkubo', key: 'tsalkubo' },
        { title: lang ? 'მცხეთა' : 'Mtskheta', key: 'mtskheta' },
      ],
    },
  }

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, translation, refrenceData }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const UseLanguageContext = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('Context Not Wrapped Reload Page')
  }

  return context
}
