import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div  style={{width:'100%', height:'auto',minHeight:'70vh'}}>
      <Navbar />
      {/* routing section */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App