import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Product from './components/Product'
import Support from './components/Support'
import Pricing from './components/Pricing'
const App = () => {
  return (
    <div style={{ width:'100%', minHeight: '100vh' , display:'flex', flexDirection:'column' }}>
      <Navbar />
      <div style={{flex:1}}>
      {/* routing section */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/support' element={<Support />} />
      </Routes>
      </div>
      <Footer />

    </div>

  )
}

export default App