import React, { useEffect, useState } from 'react'
import '../../../App.css'


function UseEffectPractise() {
    const [number,setnumber] = useState(0)
    const [number1,setnumber1] = useState(50)

    const increase = () => {
        setnumber(number +  1)
    }

    const decrement = () => {
        setnumber1(number1 - 1)
    }



useEffect(() => {
console.log('useEffect in running')
},[number])

  return (
    <div className='App'>
   <h1> Increase your Number {number} </h1>
   <button type='text' onClick={increase}>Increase Number</button>
   <h1>decrease your number {number1}</h1>
   <button type='text' onClick={decrement}>Decrease</button>
    </div>
  )
}

export default UseEffectPractise