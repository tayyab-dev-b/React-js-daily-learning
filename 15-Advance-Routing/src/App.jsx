import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import {Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='h-screen bg-black text-white relative'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='*' element = {<NotFound/>}/>
        <Route path = '/about/dashboard' element = {<Dashboard/>} />
        <Route path = '/contact/profile' element = {<Profile/>} />
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
