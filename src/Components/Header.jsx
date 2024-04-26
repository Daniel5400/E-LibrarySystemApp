import React from 'react'
import {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { FaBars} from "react-icons/fa";
// import { RiCloseFill} from "react-icons/ri";
// import Flickity from 'react-flickity-component'
import { FaShoppingCart } from "react-icons/fa";





const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const [activeNav, setActiveNav] = useState('/')

  
  return (
    <div className='header shadow-lg'>
                       
        
      <nav>

        <Link to={'/'}> <h6 className='sharon'>READEASE</h6></Link>

        <div className='bars' onClick={handleClick}>  
          {/* {click ? (<RiCloseFill id='close'/>) : (<FaBars id='bar' />)} */}
        </div>

        <ul  className={click ? 'menu active' : 'menu'}>

           {/* <NavLink to="/" className='tab' activeclassName = 'active'><li >Home</li></NavLink> */}
          
            <NavLink to="/events" className='tab'  activeclassName = 'active'><li><FaShoppingCart /></li></NavLink>

            <NavLink to="/contact" className='tab btn'  ><li>Contact</li></NavLink>   
            <NavLink to="/login" className='tab btn btn1'><li>Login</li></NavLink>   

        </ul>

    </nav>
    
    <div className={click ? 'cover' : 'cover active'}></div>
    </div>
  )
}

export default Header


