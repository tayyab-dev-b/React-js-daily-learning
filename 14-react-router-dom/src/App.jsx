import React from 'react'
import About from './routes/About'
import Home from './routes/Home'
import { Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'


const App = () => {
  return (
    <div>

      <Navbar/>
      <Routes>
      <Route path = '/' element ={ <Home/>}/>
      <Route path = '/about' element = {<About/>}/>
      </Routes>
    </div>
  )
}

export default App
