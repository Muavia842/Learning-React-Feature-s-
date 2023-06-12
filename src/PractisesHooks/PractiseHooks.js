// class Component srart
// import React, { Component } from 'react'
// import '../App.css'
//  class PractiseHooks extends Component {
//     constructor(){
//       super()
//       this.state = {
//         count : 0
//       }
//     }
//        IncrementHandler = () => {
//         this.setState((state) => (
//           {count: state.count + 1}
//         ))
//        }

//        decrementHandler = () => {
//         this.setState((state) => (
//             {count: state.count - 1}
//         ))
//        }
//   componentDidMount(){
//         console.log('componentDidMount rendring')
//   }

//   componentDidUpdate(){

//         console.log('componentDidUpdate rendring')
//   }
//   componentDidCatch(){
//     console.log('componentDidCatch rendring')
//   }

//   render() {
//     return (
//       <div className='App'>
//         <h1>increse you'r number {this.state.count}</h1>
//         <button onClick={this.IncrementHandler}> Increment</button>
//         <button onClick={this.decrementHandler}>decrement</button>
//       </div>
//     )
//   }
// }
// export default PractiseHooks
/// class component end




import "../App.css";
// import React, { Component } from 'react'

// export default class PractiseHooks extends Component {
// constructor(){
//   super()
//   this.state = {
//     count: 0
//   }
// }
// incrementHandler = () => {
//   this.setState((state) => (
//     {count: state.count + 1}
//   ))
// }
//  decrementHandler = () => {
//   this.setState(() => (
//     {count: this.state.count - 1}
//   ))
//  }
//  componentDidMount(){
//   console.log('componentDidMount is rendring')
//  }
//  componentDidUpdate(){
//   console.log(' componentDidUpdate is rendring')
//  }
//   render() {
//     return (
//       <div className="App">
//         <h1>click bellow and increase / descrese you number {this.state.count}</h1>
//         <button onClick={this.incrementHandler}>increment number</button>
//         <button onClick={this.decrementHandler}>decrement number</button>
//       </div>
//     )
//   }
// }







// import React, { useEffect, useState } from 'react'

// function PractiseHooks() {
//   const [number , setNumber] = useState(0)
//   const [numValue, setnumvalue] = useState(50)

//   const incrementHandler = () => {
//     setNumber(number + 1)
//   }
//   const decrementHandler = () => {
//     setNumber(number - 1)
//   }
 
// const incnamValueHandler = () => {
//   setnumvalue(numValue + 1)
// }
// const decnumValueHandler = () => {
//   setnumvalue(numValue - 1)
// }


// useEffect(()=>{
//   console.log('useEffect is rendering')
// },[numValue])

//   return (
//     <div className="App">
//      <h1>increase and decrese your number {number}</h1>
//      <button onClick={ incrementHandler }>increase number </button>
//      <button onClick={decrementHandler}>decrement number</button>
//      <h1>click bellow button and see some chages {numValue}</h1>
//      <button onClick={incnamValueHandler}>numValue</button>
//      <button onClick={decnumValueHandler}>decnumValue</button>
//     </div> 
//   )
// }

// export default PractiseHooks










// import React, { useState } from 'react'
// import '../App.css'
// function PractiseHooks() {
// const [number,setnumber] = useState(0)
// // const [number1,setnumber1] = useState(0)

// const addnumHandler =() => {
//   setnumber(number + 1)
// }
// const decnumHandler = () => {
//   setnumber(number - 1)
// }
//   return (
//     <div className='App'>
//     <h1>PractiseHooks</h1>
//     <h2>increse you'r number  {number}</h2>

//     <button onClick={addnumHandler}>increse </button>
//     <button onClick={decnumHandler}>decrese</button>
//     </div>
//   )
// }

// export default PractiseHooks


// import React, { useState } from "react";
// import React, { Component } from "react";
// import ChechPerson from "../Person/chechPerson";

// export default class PractiseHooks extends Component {
//   state = {
//     persons: [
//       { name: "muavia", age: 21 },
//       { name: "AttaulMustafa", age: 28 },
//       { name: "umer", age: 27 },
//     ],
//   };
//   nameHandler() {
//     this.setState({
//       persons: [
//         { name: "ahmad", age: 10 },
//         { name: "sunny", age: 21 },
//         { name: "asad", age: 15 },
//       ],
//     })
//   }

//   render() {
//     return (

//       <div className="App">
//         <h1>Practise makes better</h1>

//         <ChechPerson
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//          <ChechPerson
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         />
//          <ChechPerson
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//         <button  onClick={this.nameHandler()}>switch now </button>

//       </div>
//     );
//   }
// }

// function PractiseHooks() {
//     const [number,setNumber] =useState(0)

//     const increment = () => {
//         setNumber(number + 1)
//     }
//     const decrement = () => {
//         setNumber(number - 1)
//     }
//   return (
//     <div className="App">
//         <h1>Practise makes better</h1>
//         <h2>please increment you'r number{number}</h2>
//         <button onClick={increment}>increment</button>

//         <button onClick={decrement}>decrement</button>
//     </div>
//   )
// }

// export default PractiseHooks

// import ChechPerson from "../Person/chechPerson";

// function PractiseHooks() {
//   const [personState, setPersonState] = useState({
//     persons: [
//       { name: "muavia", age: 21 },
//       { name: "AttaulMustafa", age: 28 },
//       { name: "umer", age: 27 },
//     ],
//   });
//   const nameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: "faisal", age: 26 },
//         { name: "sunny", age: 21 },
//         { name: "ahmad", age: 30 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Practise make batter</h1>
//       <ChechPerson
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       />
//       <ChechPerson
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//       />
//       <ChechPerson
//         name={personState.persons[2].name}
//         age={personState.persons[2].age}
//       />
//       <button onClick={nameHandler}>switch now</button>
//     </div>
//   );
// }

// export default PractiseHooks;
