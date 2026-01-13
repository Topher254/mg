import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CTAFormSection from './components/CTAFormSection'
import Footer from './components/Footer'
import WhatsNew from './components/WhatsNew'
import RenovationExcellence from './components/RenovationExcellence'
import BathroomGallery from './components/BathroomGallery'
import HowItWorks from './components/HowItWorks'
import BathroomRenovation from './components/Bathroom/BathroomRenovation'

const App = () => {
  return (
    <div >
      <Navbar/>
      <div className="relative">
      <BathroomRenovation/>
      <Hero/>


      <WhatsNew/>
      <HowItWorks/>
      <RenovationExcellence/>
      <BathroomGallery/>
      <CTAFormSection/>
      <Footer/>
    </div>
    </div>
  )
}

export default App
