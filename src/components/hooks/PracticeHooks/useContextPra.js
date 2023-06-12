// import React from 'react'
// import '../../../App.css'
// import { createContext } from 'react'
// import ComponentA from './componentA';

// export const data = createContext();
// export const data1 = createContext();
// export default function UseContextPra() {
//     const name = 'muavia '
//     const age = 21
//   return (
//     <div className='App'>
// <data.Provider value={name}>
//     <data1.Provider value={age}>
//         <ComponentA />
//     </data1.Provider>
// </data.Provider>
//     </div>
//   )
// }




import '../../../App.css'

import React, { useReducer } from 'react'
const initialState = {count: 0}
function reducer(state,action){
switch(action.type){
    case 'INCREMENT' :
        return{count: state.count + 1}
        case 'DECREMENT': 
        return {count: state.count - 1}
        default:
            return state
}
}
function UseContextPra() {
    const [state,dispatch] =useReducer(reducer,initialState)
  return (
    <div className='App'>
        <h1>Hi ! today in practising useReducer hook</h1>
        <h2>click bellow button and changes something { state.count}</h2>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>increment number</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>decrement number</button>
    </div>
  )
}

export default UseContextPra