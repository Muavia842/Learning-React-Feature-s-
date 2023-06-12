// import React, { useMemo, useState } from "react";
// import "../../../App.css";
// function Usememo() {
//   const [number, setnumber] = useState(0);
//   const [count, setcount] = useState(10);

//   const increaseHandler = () => {
//     setnumber(number + 1);
//   };
//   const errorHandling = useMemo(
//     function multicommemo() {
//       console.log("multicommemo");
//       return count * 5;
//     },
//     [count]
//   );

//   const decreseHandler = () => {
//     setcount(count * 10);
//   };

//   return (
//     <div className="App">
//       <h1>increse you'r number {number}</h1>
//       <button onClick={increaseHandler}>increse number</button>
//       <h2>{errorHandling}</h2>
//       <h1>decrese you'r number{count}</h1>
//       <button onClick={decreseHandler}>decrese number</button>
//     </div>
//   );
// }

// export default Usememo;


import React, { useMemo, useState } from 'react'
import "../../../App.css";
function Usememo() { 
  const [count,setcount] = useState(0)
  const [number,setnumber] = useState(10)

const countHandler = () => {
  setcount(count + 1)
}
const numberHandler = () => {
  setnumber(number * 10)
}

const somesome = useMemo(function someErr() {
  console.log('someErr')
  return count * 5
},[count])

  return (

    <div className='App'>
    <h1>increse you'r number{count}</h1>
    <button onClick={countHandler}>count you'r number</button>
    <h2>{somesome}</h2>
    <h2>multiply you'r number{number}</h2>
    <button onClick={numberHandler}>multiply number</button>
  
    </div>
  )
}

export default Usememo