import React, { useState,useEffect } from 'react'
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  },[])
  // fetch method: fetch method is a built-in javascript function that allows you to make network requests and handle responses. it returns a promise that resolves to the response of the request. you can use the .then() method to handle the response and extract the data.
  // async function getData() {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    //   const JsonData = await response.json();
    //   setData (JsonData);
  // }

    // axios method: is a promise-based HTTP client for the browser and Node.js. it provides an easy-to-use api for making http requests and handling responses. it also supports features like interceptors,request cancellation, and automatic transformation of json data.
    async function getData() {
      try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData (response.data);

      }catch(error){
        console.error('Error fetching data:', error);
      }
    }



  return (
    <div>
    {data.map((item,idx) => (
      <div key={idx}>
        <h2>{idx}</h2>
        <h1>ID: {item.id} </h1>
        <h1>Title: {item.title}</h1>
        </div>
    ))}
    </div>
  )
}

export default App
