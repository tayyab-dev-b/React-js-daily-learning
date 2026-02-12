import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  
  function increase() {
    setnum(num +1)
  }

  function decrease() {
    setnum(num -1);
  }
  return (
    <div className='bg-black w-full h-screen fixed '>
      <h1 className='p-20 rounded-2xl m-10 text-4xl font-bold bg-gray-500 w-2xs text-white text-8xl text-center'>{num}</h1>
      <div className="btns flex gap-4 m-4">
      <button onClick={increase} className='p-10 bg-gray-400 rounded-2xl text-white text-4xl '>increase</button>
      <button onClick={decrease} className='p-10 bg-gray-400 rounded-2xl text-white text-4xl'>decrease</button>
      </div>
    </div>
  )
}

export default App
