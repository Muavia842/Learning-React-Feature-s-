import React, { useState } from "react";
import '../App.css';
// import Person from "../Person/person";


// 

// const FunctionUses = () => {
//     const [personState,setpersonState] = useState({
//         persons : [
//             {name : 'muavia', age : 21},
//             { name :  'sunny' , age : 20},
//             { name : "atti" , age : 25}
//         ]
//     })

//     const switchHandler = () => {
//         setpersonState({
//             persons : [
//                 {name : 'faisal', age : 27},
//                 { name :  'faizi' , age : 29},
//                 { name : "mubashir" , age : 22}
//             ]
//         })
//     }
//     return(
//         <div className="App">
//             <h1>Hi' I'm React app</h1>
//             <button onClick={switchHandler}>switch name</button>
//             <Person
//              name = {personState.persons[0].name}
//              age ={personState.persons[0].age}
//               />
//             <Person
//              name = {personState.persons[1].name} 
//              age = {personState.persons[1].age} 
//              />
//             <Person 
//             name = {personState.persons[2].name} 
//             age = {personState.persons[2].age}
//             />
//         </div>
           
        
//     )
// }







// const FunctionUses = () => {
//     const [personState, setpersonState] = useState({
//         persons : [
//             {name: 'muavia' , age : 21},
//             {name: 'sunny' , age : 20},
//             {name : 'umer' , age : 28}
//         ]
//     });

//     const [otherState, setotherState] = useState('some other value');
//     console.log( otherState)
//    console.log(personState);
//     const switchHandler = () => {
//         setpersonState({
//             persons : [
//                 {name: 'Ahmad' , age : 10},
//                 {name: 'Atti' , age : 25},
//                 {name : 'Faisal' , age : 27}
//             ]
//         })
//     }
//     return(
//         <>
//             <h1>Hi' I'm React app</h1>
//             <button onClick={switchHandler}>Switch name</button>
//             <Person
//              name = {personState.persons[0].name} 
//              age = {personState.persons[0].age} 
//             />
//             <Person 
//             name = {personState.persons[1].name} 
//             age = {personState.persons[1].age} 
//             />
//             <Person 
//             name = {personState.persons[2].name} 
//             age = {personState.persons[2].age} 
//             />
//         </>
//     )
// }





// import React, { useState } from "react";
// // import './App.css';
// import Person from "../Person/person";

// const FunctionUses = () => {
//     const [personState, setpersonState] = useState({
//         persons : [
//             { name:'muavia', age : 21 },
//             { name:'sunny', age : 20 },
//             { name:'faisal', age : 28 }
//           ]
//     })





const FunctionUses = () => {
    const [number , setNumber] = useState(0) 
   
   
   const addNumberHandler = () =>{
        setNumber(number + 1)
    }
    const subsNumberHandler = () => {
        setNumber(number - 1)
    }

    return(
        <div className="App">
            <h1>you are number is {number}</h1>
            <button onClick={addNumberHandler}>add me</button>
            <button onClick={subsNumberHandler}>Substract me</button>
        </div>
    )
}


  
export default FunctionUses




