import "./Navbar.css"
import React, {useState} from 'react'
 import { Link } from 'react-router-dom';
 import {Routes, Route} from 'react-router-dom'
 import Home from "../Home";
 // import Button from './LeftBar';
// import './Dropdown';
// import {Logo} from "./Ssense_logo.svg"
import './Navbar.css';
 const Navbar = () => {
const [click, setClick] =useState(false);

const handelClick =()=>setClick(!click);

  return (
    <>
    <nav className='navbar'>

        <ul className='navbar_list'>
            <li className='left_of_navbar'>
                <Link to='/mens'  className='link'>
                    MENSWEAR
                </Link>
                <Link to='/womens'  className='link'>
                    WOMENSWEAR
                </Link>
                <Link to='/everything'  className='link'>
                    EVERYTHINGELSE
                </Link>
                <Link to='/search'
                 className='link'
                 >
                    SEARCH
                </Link>
            </li>
            <li>
            <Link to='/'  className='link'>
            <img src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" />
        </Link>
            </li>
            <li className='right_of_navbar'>
            <Link to='/language'  className='link' id='language'>
               <span>ENGLISH</span>
                <ul className='drop_down'>
                        <li>
                            FRANCHIES
                        </li>
                        <li>日本語</li>
                        <li>中文</li>
                        <li>한국어</li>
                    </ul>
                    
                </Link>
                <Link to='/login'  className='link'>
                LOGIN
                </Link>
                <Link to='/wishlist' className='link'>
                WISHLIST
                </Link>
                <Link to='/cart'  className='link'>
                    SHOPPING BAG {`(0)`}
                </Link>
            </li>
        </ul>
       <Routes>
           <Route path='/' element={Home}/>
{/* 
<Route path='/mens' element={Menswear}/>
<Route path='/womens' element={Womenswear}/>
<Route path='/everythings' element={EverythingElse}/>

<Route path='/login' element={Login}/>
<Route path='/wishlist' element={Wishlist}/>
<Route path='/cart' element={ShoppingBag}/>

 */}

       </Routes>
    </nav>
    
    </>
  )
}
export default Navbar;
