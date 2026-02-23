import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(function(){
    console.log('useeffect hokk called');
  },[num])
  return (
    <div>
      <h1>Welcome to useeffect hook tutorial</h1>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onMouseEnter={function(){
        setNum(num + 1)
      }} onMouseLeave={function(){
        setNum2(num2 +10);
      }}>hover</button>
      
    </div>
  )
}

export default App
