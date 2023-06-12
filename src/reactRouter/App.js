import React from 'react'
import {BrowserRouter, Navigate, NavLink, Route, Routes} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Navbar from './Navbar' 
import './routerCss.css'
import UseParams from './useParams'
import Users from './Users'
import UseSearch from './UseSearch'
function App() {
  return (
    <div className='main-app'>
      <BrowserRouter>
      <Navbar />
        {/* <NavLink  to='/home'>Home</NavLink>
        <NavLink  to='/about'>About</NavLink> */}
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About /> } />
          <Route path='/users' element={<Users/>}/>
          <Route path='/search' element={<UseSearch/>}/>
          {/* <Route  path='/UseParams/sidhu' element={<UseParams/>}/> */}
          <Route  path='/UseParams/:name' element={<UseParams/>}/>
          {/* <Route  path='/*' element={<Navigate to='/'/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
