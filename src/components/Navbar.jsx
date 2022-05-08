import "./Navbar.css"
import React, {useState} from 'react'
 import { Link } from 'react-router-dom';
 const Navbar = () => {
const [click, setClick] =useState(false);

const handelClick =()=>setClick(!click);

  return (
    <>
    <nav className='navbar'>

        <ul className='navbar_list'>
            <li className='left_of_navbar'>
                <Link to='/Menswear' className='linkf linkmain'  >
                    MENSWEAR
                </Link>
                <Link to='/Womenswear'  className='linkf linkmain'>
                    WOMENSWEAR
                </Link>
                <Link to='/Everything'  className='linke linkmain'>
                    EVERYTHING ELSE
                </Link>
                <Link to='/'
                 className='linkd linkmain'
                 >
                    SEARCH
                </Link>
            </li>
            <li>
            <Link to='/'  className='linkmain'>
            <img src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" />
        </Link>
            </li>
            <li className='right_of_navbar'>
            <Link to='/'  className='linkmain' id='language'>
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
                <Link to='/login'  className='linkc linkmain'>
                LOGIN
                </Link>
                <Link to='/' className='linkb linkmain'>
                WISHLIST
                </Link>
                <Link to='/Checkout'  className='linka linkmain'>
                    SHOPPING BAG
                </Link>
            </li>
        </ul>
    </nav>
    
    </>
  )
}
export default Navbar;
