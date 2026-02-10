import React from "react";

const App = () => {
  function btnClicked() {
    console.log('Button Clicked')
  }

  function mouseOver() {
    console.log('Mouse Over');
  }

  return (
    <div className="bg-gray-950 h-screen w-full">
      <button onMouseOver={mouseOver} onClick={btnClicked} className='p-8 text-white font-bold m-10 bg-gray-700 rounded-2xl' >click Button</button>


      {/* 2nd method : we also create and call the method inside the button  */}
      {/* <button
        onClick={function () {
          console.log("button clicked from inside the button function");
        }}
        className="p-8 text-white font-bold m-10 bg-gray-700 rounded-2xl"
      >
        click Button
      </button> */}



      {/* input handelling function  */}
      <input
        onChange={function (elem) {
          console.log(elem.target.value);
        }}
        className="text-white bg-gray-500 rounded-2xl m-10 p-7"
        type="text"
      />
    </div>
  );
};

export default App;
