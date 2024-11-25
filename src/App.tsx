import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PropertyListings from './components/PropertyListings'
import StreetView from './components/StreetView'
import Testimonials from './components/Testimonials'
import Condominiums from './components/Condominiums'
import NewLaunches from './components/NewLaunches'
import PointsOfInterest from './components/PointsOfInterest'
import NearbyNeighborhoods from './components/NearbyNeighborhoods'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ComparisonTool from './components/ComparisonTool'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      <PropertyListings />
      <StreetView />
      <Testimonials />
      <Condominiums />
      <NewLaunches />
      <PointsOfInterest />
      <NearbyNeighborhoods />
      <ComparisonTool />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App