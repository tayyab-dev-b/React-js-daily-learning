import React from 'react'
import ThemeButton from './ThemeButton'

const Navbar = () => {
  return (
    <div className=''>
      <nav className='flex items-center justify-between text-2xl bg-black text-white p-5 '>
        <h1 className='font-bold'>ContextApi</h1>
        <ul className='flex gap-20'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
        </ul>
      </nav>
      <ThemeButton />
    </div>
  )
}

export default Navbar
