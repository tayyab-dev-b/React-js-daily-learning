import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/Card';

const App = () => {
const [userData, setUserData] = useState([])
const [index, setIndex] = useState(0)

  const getData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  let printData = <h3 className='text-gray-400 top-1/2  left-1/2 absolute translate-x-1/2 translate-y-1/2'>loading...</h3>;

  if (userData.length > 0) {
    printData = userData.map((elem) => (
     <Card key={elem.id} elem={elem} />
      
    ))
  }

  useEffect(()=>{
    getData();
  },[index])

  return (
    <div className="bg-black min-h-screen p-4 overflow-auto">
      <h1>{index}</h1>
      <div className="flex flex-wrap justify-center items-center text-gray-400 font-bold">{printData}</div>
      <div className='flex pt-10 justify-center items-center gap-10 '>
      <button onClick={()=>{
        setUserData([])
        if(index > 0){
          setIndex(index - 1);
        }
      }} style={{opacity:index===0?0.5:1}} className='bg-amber-400 px-5 rounded active:scale-95 cursor-pointer py-2 hover:bg-amber-500 text-black font-bold '>prev</button>
      <h3 className='text-white'>Page {index}</h3>
      <button onClick={()=>{
        setUserData([])
        setIndex(index + 1);
      }} className='bg-amber-400 px-5 rounded active:scale-95 cursor-pointer py-2 hover:bg-amber-500 text-black font-bold '>next</button>
      </div>
    </div>
  )
}

export default App
