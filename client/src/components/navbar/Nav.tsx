import React, { useEffect, useState } from 'react'
import { CiLocationOn, CiPhone, CiClock1 } from 'react-icons/ci'
import { FaBars } from 'react-icons/fa'

import InformationComponent from './InformationComponent'
import { UseLanguageContext } from '../../contexts/LanguageContext'
import { UseGeneralContext } from '../../contexts/GeneralContext'
import GeoFlag from '../../assets/icons/flag.png'
import EngFlag from '../../assets/icons/united-kingdom.png'
import { useLocation, useNavigate } from 'react-router-dom'
import useOutClick from '../../hooks/useOutClick'
function Nav() {
  const { homeRef, listingRef, createRef } = UseGeneralContext()
  const { translation, setLang, lang } = UseLanguageContext()
  const { nav } = translation
  const { home, listing, createNew } = nav
  const [isNavFixed, setIsNavFixed] = useState(false)
  const navigation = useNavigate()
  const location = useLocation()
  const [dropDown, setDropDown] = useState(false)
  const handleScroll = () => {
    // Check if the user has scrolled beyond a certain point (e.g., the height of the contactSection)
    const scrollY = window.scrollY || document.documentElement.scrollTop
    setIsNavFixed(scrollY > 40) // Adjust the value based on your design
  }
  const dropDownRef = React.useRef() as any
  const handleDropDownCancle = () => {
    setDropDown(false)
  }
  useOutClick(dropDownRef, handleDropDownCancle)

  useEffect(() => {
    // Attach scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll)

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const style = {
    nav: ``,
    conntactSection:
      ' flex items-center justify-around w-[100vw] bg-brand-gold h-[90px]',
    logoDiv: 'text-brand-green font-bold  text-[2rem]',
    conntactDiv: 'flex justify-around gap-10',
    navSection: `bg-brand-brown h-[50px] max_lg:hidden flex justify-around items-center fixed w-[100%] z-50 ${
      isNavFixed ? 'top-0' : 'top-[90px]'
    }`,
    linksDiv: `text-brand-white flex gap-2 w-[500px] `,
    authDiv: `text-brand-white`,
    link: `text-[12px] hover:bg-gray-200 h-[50px] flex items-center justify-center px-5 hover:text-gray-600`,
  }

  const scrollToSection = (ref: any) => {
    console.log(location.pathname)
    if (location.pathname !== '/') {
      navigation('/')
      setTimeout(() => {
        if (ref && ref.current) {
          ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 500)
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const responsiveSelect = (ref: any) => {
    scrollToSection(ref)
    setDropDown(false)
  }
  return (
    <nav className={style.nav}>
      <section className={style.conntactSection}>
        <div className={style.logoDiv}>LOGO</div>
        <div className={style.conntactDiv}>
          <InformationComponent
            Icon={CiPhone}
            topText="+995 500500500"
            bottomText="-info@olympus.com"
          />
          <InformationComponent
            Icon={CiLocationOn}
            topText="Somethingdze ST"
            bottomText="Tbilisi,Georgia"
          />
          <InformationComponent
            Icon={CiClock1}
            topText="11 am to 7 pm"
            bottomText="Monday to Friday"
          />
        </div>
      </section>
      <section className={style.navSection}>
        <div className={style.linksDiv}>
          <h1 onClick={() => scrollToSection(homeRef)} className={style.link}>
            {home}
          </h1>
          <h1
            onClick={() => scrollToSection(listingRef)}
            className={style.link}
          >
            {listing}
          </h1>
          <h1 onClick={() => scrollToSection(createRef)} className={style.link}>
            {createNew}
          </h1>
        </div>
        {/* <div className={style.authDiv}>
          <button>Log in</button>
          <button>Sign up</button>
        </div> */}
        <div>
          <img
            className="w-[30px] h-[30px] cursor-pointer hover:bg-gray-800"
            src={lang ? GeoFlag : EngFlag}
            onClick={() => setLang(!lang)}
          />
        </div>
      </section>
      <div
        onClick={() => setDropDown(!dropDown)}
        className="lg:hidden p-10 text-[2rem]  text-brand-green absolute z-50 top-[3.4rem] "
      >
        <FaBars />
      </div>
      {dropDown && (
        <div
          ref={dropDownRef}
          className="bg-brand-brown  fixed w-[50%] z-50 text-brand-white "
        >
          <h1 onClick={() => responsiveSelect(homeRef)} className={style.link}>
            {home}
          </h1>
          <h1
            onClick={() => responsiveSelect(listingRef)}
            className={style.link}
          >
            {listing}
          </h1>
          <h1
            onClick={() => responsiveSelect(createRef)}
            className={style.link}
          >
            {createNew}
          </h1>
          <div className="flex items-end justify-end p-2">
            <img
              className="w-[30px]  h-[30px] cursor-pointer hover:bg-gray-800"
              src={lang ? GeoFlag : EngFlag}
              onClick={() => setLang(!lang)}
            />
          </div>
        </div>
      )}{' '}
    </nav>
  )
}

export default Nav
