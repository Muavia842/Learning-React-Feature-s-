import React from "react"; 

const person = (props) => {
    return(
        <div>
            <h4>my name is {props.name} and my age is {props.age}</h4>
            {/* <input type="text" onChange = {props.Changed} value = {props.name}></input> */}
        </div>
      
    )
}
export default person

// const person = (props) => {
//     return(
//         <h3>my name is {props.name} and i'm {props.age} year old</h3>
//         //<p>{props.children}</p>
//     )
// }
// export default person