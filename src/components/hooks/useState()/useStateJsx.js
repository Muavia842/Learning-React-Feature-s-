import React from 'react'
import '../../../App.css'
const Person = (props) => {
    return(
        <div className='App'>
        <h3>my name is {props.name} and my age is {props.age}</h3>
        </div>
    )
}
export default Person
