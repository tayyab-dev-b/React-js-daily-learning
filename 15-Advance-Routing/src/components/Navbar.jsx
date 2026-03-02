import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-green-950 text-2xl'>
      <h3>BrandName</h3>
      <div className='flex gap-10 p-4'>

        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  )
}

export default Navbar
