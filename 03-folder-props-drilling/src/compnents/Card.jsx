import React from "react";


const Card = (props) => {

    // console.log(props.user);

  return (
    <div className="parent">
        <img src={props.img} alt="" />
      <h1>{props.user}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, modi?
      </p>
      <button> Click Me</button>
    </div>
  );
};

export default Card;
