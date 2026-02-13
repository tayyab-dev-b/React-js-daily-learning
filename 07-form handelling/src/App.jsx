import React from 'react'

const App = () => {
  function submitHandeler(e){
    e.preventDefault();
    console.log('form submittec')
  }
  return (
    <div className='w-full h-screen bg-amber-700 '>
      <form onSubmit={(e)=>{
        submitHandeler(e);
      }} action="" className='flex flex-col'>
        <input className='bg-gray-300 p-8 m-10 rounded-2xl text-black text-5xl w-2xl' type="text" placeholder='Enter username' />
        <button type="submit" className='bg-gray-300 rounded-2xl p-2 ml-20 text-3xl w-100 '>submit</button>
      </form>
    </div>
  )
}

export default App
