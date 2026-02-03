import React from 'react'
import Card from './compnents/Card'
import img1 from "./assets/image.jpg";
import img2 from "./assets/img2.jpg";

const App = () => {
  return (
    <div className='app'>
      <Card user= "Tayyab darling" img= {img1}/>
      <Card user= "React darling" img= {img2} />
      
      
      

    </div>
  )
}

export default App
