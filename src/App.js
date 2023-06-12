import React from 'react';
import './App.css';
// import Person from './Person/person';

 class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        count : 0
      }
    }

increment = () => {
 this.setState((state) => (
  {count: state.count + 1}
 ))
}
decrement = () => {
  this.setState((state)=>(
    {count: state.count - 1}
  ))
}
  render() {
    return (
      <div className='App'>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>increment</button>
      <button onClick={this.decrement}>decrement</button>
      </div>
     
    )
  }
}
export default App





// class Cart extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {qty: 0}
//   }
// updateqty = () =>{
//   this.setState((state)=>(
//     {qty: state.qty + 1}
//   ))
// }

// componentDidMount(){
// console.log('Excute after component render didmount')
// }

// componentDidUpdate(prevprops,prevstate){
//   console.log('component didUpdate')
// }

//   render(){
//     return(
//       <div className='App'>
//        <h1> Cart item {this.state.qty}</h1>  
//        <button onClick={this.updateqty}> click me</button>
       
//       </div>
//     )
//   }
// }
// export default Cart





// class App extends   React.Component{
//   state = {
//     persons :[
//       {name : 'muavia', age : 21},
//       {name : 'sunny', age : 20},
//       {name : 'faisal', age : 26}
//     ]
//   };
// switchHandler = () => {
//   this.setState({
//     persons :[
//       {name : 'Ahmad', age : 10},
//       {name : 'Atti', age : 26},
//       {name : 'Umer', age : 28}
//     ]
//   })
// };
// Changedhandler = (event) => {
// this.setState({
//   persons: [
//     {name : 'Ahmad', age : 10},
//     {name : event.target.value , age : 26},
//     {name : 'Umer', age : 30}
//   ]
// })
//  }


//   render(){
//     return(
//       <>
//         <h1>Hi I'm React app</h1>
//         <button onClick={this.switchHandler}>click me</button>
//         <Person 
//         name = {this.state.persons[0].name} 
//         age ={this.state.persons[0].age
//         }/>
//         <Person 
//         name = {this.state.persons[1].name} 
//         age ={this.state.persons[1].age}
//         Changed={this.Changedhandler}> input changed</Person>
        
//         <Person 
//         name = {this.state.persons[2].name} 
//         age ={this.state.persons[2].age}
//         />
//       </>
//     )
//   }
// }
// export default App









// class App extends React.Component{
// state = {
//   persons : [
//     { name:'muavia', age : 21 },
//     { name:'sunny', age : 20 },
//     { name:'faisal', age : 28 }
//   ]
// }
// switchHandler = () => {
//   this.setState({
//     persons : [
//       { name:'Ahmad', age : 10 },
//       { name:'sunny', age : 20 },
//       { name:'atti', age : 25 }
//     ]
//   })
// }

//   render(){
//     return( 
//       <>
//       <h1>Hi' I'm Reat</h1>
//       <button onClick={this.switchHandler}>update Now</button>
//       <Person 
//       name ={this.state.persons[0].name} 
//       age ={this.state.persons[0].age}
//       />
//        <Person
//         name ={this.state.persons[1].name}
//          age ={this.state.persons[1].age}
//          />
//        <Person
//         name ={this.state.persons[2].name} 
//         age ={this.state.persons[2].age}
//         />
//       </>
      
//     )
//   }
// }
// export default App






