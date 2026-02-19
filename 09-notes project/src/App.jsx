import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([])

  const submitHandeler = (e) => {
    e.preventDefault();
    // console.log("Title:",title);
    // console.log("Details:",details)
 
    const copyTask = [...task];

    copyTask.push({title,details})
    setTask(copyTask);

    setTitle('');
    setDetails('');


  }

  const deleteNote = (deleteIndex) => {
    const updateTask = task.filter((_, index) => index !== deleteIndex);
    setTask(updateTask);
  }


  return (
    <div className='bg-black w-full min-h-screen text-white px-4 py-6 sm:px-6 md:px-10'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-start'>
        <form onSubmit={(e) => {
          submitHandeler(e);
          
        }} action="" className='flex w-full flex-col gap-4 rounded-lg border border-white/20 p-4 sm:gap-5 sm:p-5 lg:w-1/3'>
          <input
            className='w-full rounded border-2 p-3 text-left text-base sm:text-lg'
            type="text"
            placeholder='Enter Notes Heading'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className='w-full rounded border-2 px-3 pt-3 pb-20 text-left text-base sm:text-lg'
            placeholder='write details'
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
          <button type="submit" className='w-full rounded active:scale-90 bg-white p-3 text-base text-black sm:text-lg'>Add Note</button>
        </form>
        <div className='flex w-full flex-wrap gap-4 lg:w-2/3'>
          {task.map(function(item,index){
             return   <div key={index} className="card flex min-h-44 w-full flex-col rounded bg-white sm:w-[calc(50%-0.5rem)]">
              <h2 className=' p-4 pb-1 font-bold text-black'>{item.title}</h2>
              <h2 className=' px-4 pb-3 text-black'>{item.details}</h2>
             <button
        onClick={() => deleteNote(index)}
        className="mt-auto mb-3 ml-4 w-fit rounded bg-red-500 px-3 py-1 text-white"
      >
        Delete
      </button>
             </div> 
            
          })}
        </div>
      </div>
    </div>
  )
}

export default App
