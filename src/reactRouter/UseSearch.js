import React from 'react'
import {useSearchParams} from 'react-router-dom'
function UseSearch() {
  // const [SearchParams,setSearchParams] = useSearchParams() 
  const [searchParams,setsearchParams] = useSearchParams()
  return (
    <div>
        <h1>this is a search Page</h1>
        <form>
            <label htmlFor=''>Search</label>
            <input type='text' placeholder='Search' />
            <br/>
            <input type='submit' value= 'Search' onChange={(e) => setsearchParams({q:e.target.value}) }/>
        </form>
    </div>
  )
}

export default UseSearch()