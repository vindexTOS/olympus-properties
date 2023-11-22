import React from 'react'
import { CiLocationOn, CiPhone, CiClock1 } from 'react-icons/ci'

import InformationComponent from './InformationComponent'
function Nav() {
  const style = {
    nav: ``,
    conntactSection:
      ' flex items-center justify-around w-[100vw] bg-brand-gold h-[90px]',
    logoDiv: 'text-brand-green font-bold  text-[2rem]',
    conntactDiv: 'flex justify-around gap-10',
    navSection: 'bg-brand-brown h-[50px] flex justify-around items-center',
    linksDiv: `text-brand-white`,
    authDiv: `text-brand-white`,
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
          <h1>Home</h1>
        </div>
        {/* <div className={style.authDiv}>
          <button>Log in</button>
          <button>Sign up</button>
        </div> */}
      </section>
    </nav>
  )
}

export default Nav
