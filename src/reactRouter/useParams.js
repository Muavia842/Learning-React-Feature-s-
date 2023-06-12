import React from 'react'
import { useParams } from 'react-router-dom'


function UseParams() {
  const params = useParams()
const {name} = params
  return (
    <div>
      <h1>this is {name} data</h1>
    </div>
  )
}

export default UseParams
