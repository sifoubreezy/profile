import React from 'react'
import CTA from './CTA'
import Me from '../../me.png'
import './Header.css'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id="home">
        <div className="container header_container">
            <h5>hello im</h5>
            <h1>sofiane nedjai</h1>
            <h5 className="text-light">fullstack and machine learning developer</h5>
            <CTA />
            <HeaderSocial/>
            <div className="me">
              <img src={Me} alt="me" />
            </div>
            <a href="#contact"className="scroll__down">Scroll Down</a>
        </div>
    </header>
  )
}

export default Header