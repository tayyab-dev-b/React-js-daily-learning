import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
              <h1>This is Navbar</h1>
              <Link to = '/'>Home</Link>
              <Link to = '/about'>About</Link>
            </nav>
            
    </div>
  )
}

export default Navbar
