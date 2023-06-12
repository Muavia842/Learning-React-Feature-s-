import React, { useContext } from 'react'
import {data,data1} from './useContextPra'
import '../../../App.css'

function ComponentA() {
  const name = useContext(data)
  const age = useContext(data1)
  return (
    <div>
    <h1>Hi I'm context Api </h1>
<h2>My name is {name} and my age is {age} </h2>
    </div>
  )
}

export default ComponentA