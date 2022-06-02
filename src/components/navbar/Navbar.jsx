import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import {BiNetworkChart} from 'react-icons/bi'
import { useState } from 'react'
const Navbar = () => {
    const [activeNav,setActiveNav] = useState('#home')
  return (
    <nav>
        <a href="#home" onclick={()=> setActiveNav('#home')} className={activeNav ==='#home' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onclick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience"><BiBook/></a>
        <a href="#services"><RiServiceLine/></a>
        <a href="#portfolio"><BiNetworkChart/></a>
        <a href="#contact"onclick={()=> setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Navbar