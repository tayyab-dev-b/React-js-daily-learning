
import React from 'react'

const App = () => {
  // 1. clear method:
  // localStorage.clear()  to clear the local storage
  // sessionStorage.clear() to clear the session storage

  // 2.setItem and getItem method:
  // const user = localStorage.getItem('name');
  // localStorage.setItem('age', 20);
  // const age = localStorage.getItem('age');
  // localStorage.setItem('skill','web developer');
  // const skill = localStorage.getItem('skill');
  // console.log(user);
  // console.log(age);
  // console.log(skill);

  const user = localStorage.getItem('name');
  const age = localStorage.getItem('age');
  const skill = localStorage.getItem('skill');
  console.log(user,',',age,',',skill);

// Remove method:
  localStorage.removeItem('name');
  localStorage.removeItem('age');

  // Store object in local storage:
  const userInfo = {
    name:'tayyab khan',
    age: 80,
    skill: 'web developer'
  }

  localStorage.setItem('userInfo', JSON.stringify(userInfo));  // this will store the object as a string in local storage

  // to conver the object in origional form we use JSON.parse() method:
  const userInfoFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'));
  console.log(userInfoFromLocalStorage);
  

  return (
    <div>
      app
    </div>
  )
}

export default App
