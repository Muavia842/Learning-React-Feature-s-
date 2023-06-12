import React from 'react'
import { NavLink } from 'react-router-dom'
import './routerCss.css'
function Navbar() {
  return (
    <div className='Navbar-main'>
      <ul>
        <li className='active'> <NavLink to='/home'>Home</NavLink> </li>
        <li className='active'> <NavLink to='/about'>About</NavLink> </li>
        <li className='active'> <NavLink to='/users'>Users</NavLink></li>
        <li className='active'> <NavLink to='/useParams/anil'>UseParams</NavLink></li>
        <li className='active'> <NavLink to='/useParams/sidhu'>UseParams</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
