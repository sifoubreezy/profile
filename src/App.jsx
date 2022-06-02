import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Experiance from './components/experiance/Experiance'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import './index.css'
const App = () => {
  return (
    <>
    
    <Header />
    <Navbar/>
    <About />
    <Experiance />
    <Services />
    <Portfolio />
    <Contact />
    <Footer/>
    
    </>
  )
}

export default App