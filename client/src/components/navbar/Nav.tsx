import React from 'react'

function Nav() {
  const style = {
    nav: ``,
    conntactSection:
      ' flex items-center justify-around w-[100vw] bg-brand-white h-[90px]',
    logoDiv: '',
    conntactDiv: 'flex justify-around gap-20',
    navSection: 'bg-brand-dark-1 h-[50px] flex justify-around items-center',
    linksDiv: `text-brand-white`,
    authDiv: `text-brand-white`,
  }
  return (
    <nav className={style.nav}>
      <section className={style.conntactSection}>
        <div className={style.logoDiv}>LOGO</div>
        <div className={style.conntactDiv}>
          <h1>Number</h1>
          <h1>Adress</h1>
          <h1>Socials</h1>
        </div>
      </section>
      <section className={style.navSection}>
        <div className={style.linksDiv}>
          <h1>Home</h1>
        </div>
        <div className={style.authDiv}>
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </section>
    </nav>
  )
}

export default Nav
