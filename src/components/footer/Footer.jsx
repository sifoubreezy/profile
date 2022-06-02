import React from 'react'
import './Footer.css'
import {RiInstagramLine} from 'react-icons/ri'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {RiTwitterLine} from 'react-icons/ri'
const Footer = () => {
  return (
    <footer>
        <a href="#" className="footer_logos">SOFIANE</a>
        <ul className="permalink">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_social">
            <a href="https://instagram.com"><RiInstagramLine/></a>
            <a href="https://facebook.com/"><RiFacebookCircleLine/></a>
            <a href="http://twitter.com/"><RiTwitterLine/></a>
        </div>
        <div className="footer_copyright">
            <small>&copy;Sofiane All right reserved</small>
        </div>
    </footer>
  )
}

export default Footer