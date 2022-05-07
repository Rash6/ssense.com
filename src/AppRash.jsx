
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import React from 'react'
import { Menswear } from './components/Menswear'
import { Womenswear } from './components/Womenswear'
import {Everything} from './components/Everything'


function App() {
 

  return (
    <div className="App">
       <div className='nav'>
        <Link className="nav-menswear" to="/Menswear">
          Menswear
        </Link>
         <Link className="nav-womenswear" to="/Womenswear">
          Womenswear
        </Link>
        <Link className="nav-Everything" to="/Everything">
          Everything Else
        </Link>
      
       
      </div>
      <Routes>
         <Route path="/Menswear" element={<Menswear />} />
         <Route path="/Womenswear" element={<Womenswear />} />
         <Route path="/Everything" element={<Everything />} />
      
      </Routes>
  </div>
 

  )
}

export default App
