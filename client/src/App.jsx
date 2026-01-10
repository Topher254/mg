import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BathroomHero from './components/Bhero'
import ControlsPanel from './components/ControlsPanel'
import CTAFormSection from './components/CTAFormSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <div className="relative">
      <BathroomHero />
      <ControlsPanel />
      <CTAFormSection/>
      <Footer/>
    </div>
    </div>
  )
}

export default App
