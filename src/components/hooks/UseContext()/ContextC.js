

import React, { useContext } from 'react'
import { data, data1 } from './useContext'

function ContextC() {
  const myName = useContext(data)
  const age = useContext(data1)
  return (
    <div>
    <h3>ContextC is rundring </h3>
    <h2>My name is {myName} and my age is {age} </h2>
    </div>
  )
}

export default ContextC




// import React, { useContext } from 'react'
// import { Data } from './useContext'
// import { Data1 } from './useContext'
// function ContextC() {
//    const myName =  useContext(Data)
//    const mygender =  useContext(Data1)
//   return (
//     <div>
//     <h3>ContextC is rundring</h3>
//     <h1>My name is {myName} and  My gender is {mygender}</h1>
//     </div>
//   )
// }

// export default ContextC