import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BathroomHero from './components/Bhero'
import ControlsPanel from './components/ControlsPanel'
import CTAFormSection from './components/CTAFormSection'
import Footer from './components/Footer'
import WhatsNew from './components/WhatsNew'
import RenovationExcellence from './components/RenovationExcellence'
import BathroomGallery from './components/BathroomGallery'
import HowItWorks from './components/HowItWorks'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <div className="relative">
      <BathroomHero />
      <ControlsPanel />
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
