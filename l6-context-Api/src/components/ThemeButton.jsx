import React, { useContext } from 'react'
import {ThemContext} from '../context/ThemeContext'


const ThemeButton = () => {
   
    const {theme,changeButtonTheme}= useContext(ThemContext);
    

    
  return (
    <div className='flex items-center justify-center mt-20 text-blue-950 text-2xl font-extrabold active:scale-95'>
      <button onClick={changeButtonTheme} className= {`p-5 rounded ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}>Toggle Theme ({theme}) </button>
    </div>
  )
}

export default ThemeButton
