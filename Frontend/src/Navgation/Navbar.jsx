import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <h1>
            Fruit.IO
        </h1>

        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Fruits">Fruits</Link> </li>
            <li> <Link to="/About">About</Link> </li>
            <li> <Link to="/Login">Login</Link> </li>
        </ul>
    </div>
  )
}
