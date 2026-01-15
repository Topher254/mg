import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './components/Hero'
import WhatsNew from './components/WhatsNew'
import HowItWorks from './components/HowItWorks'
import RenovationExcellence from './components/RenovationExcellence'
import BathroomGallery from './components/BathroomGallery'
import CTAFormSection from './components/CTAFormSection'
import BathroomRenovation from './components/Bathroom/BathroomRenovation'
import React from 'react'
import Legal from './components/Legal/Legal'
import BlogPage from './components/Blog/BlogPage'
import Gallery from './components/Gallery'
import ServiceAreas from './components/ServiceAreas'





/* Bathroom (Home) Page */
const BathroomPage = () => (
  <>
    <BathroomRenovation />
    <Hero />
    <WhatsNew />
    <HowItWorks />
    <RenovationExcellence />
    <BathroomGallery />
      <ServiceAreas/>

  </>
)

const App = () => {
  return (
    <Router>
      {/* ALWAYS VISIBLE */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<BathroomPage />} />
          <Route path="/bathrooms" element={<BathroomPage />} />
          <Route path="/legal-basement" element={<Legal/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path='/contact' element={<CTAFormSection/>}/>
          <Route path='/estimate' element={<CTAFormSection/>}/>
          <Route path="/blog" element={<BlogPage/>} />

        </Routes>
      </main>

      {/* ALWAYS VISIBLE */}
      <Footer />
    </Router>
  )
}

export default App
