import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './Navgation/Navbar'
import Home from './Components/Home'
import Fruits from './Components/Fruit'
import About from './Components/About'
import Login from './Components/Login'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/Fruits" element={<Fruits />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}
