import React, { useState } from "react";
import "../../../App.css";
// import Callbackchail from './Callbackchail'
function Usecallback() {
  const [number, setnumber] = useState(0);
  const [count, setcount] = useState(10);

  const increaseHandler = () => {
    setnumber(number + 1);
  };

  const decreaseHandler = () => {
    setcount(count * 10);
  };

  // const addevent = Usecallback(()=> {
  //   console.log('addevent rendering')
  //   // let i= 0;
  //   // while(i<20000000) i++
  //   return count%2===0
  // },number)
  function addevent() {}

  return (
    <div className="App">
      <button onClick={increaseHandler}> increse number{number}</button>
      <span>{addevent ? "event" : "add"} </span>
      <button onClick={decreaseHandler}>multiply number{count}</button>
    </div>
  );
}

export default Usecallback;
