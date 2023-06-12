import React, { useReducer } from "react";
import "../../../App.css";

const  initial = {count: 0}
// const initial = 0;

function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }

  //   if(action.type === 'Increment'){
  //   return state + 1
  // }
  // if(action.type === 'decrement'){
  //   return state - 1
  // }
  // return state
}
function Reducerfunc() {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <div className="App">
      <h1>change youe state by one click {state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}
export default Reducerfunc;
