import React, { useState } from 'react';
// import '../App.css';
import {AiFillHome } from "react-icons/ai";
// import {FaCubes } from "react-icons/fa";
import { FaCubes } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { TbBooks } from "react-icons/tb";



const Sidebar = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);



  // const [open] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);

  const [open1, setOpen1] = useState(false);

  const handleClick = () => {
    setOpen1(!open1);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = open1 ? 'auto' : 'hidden'; // Disable or enable scrolling
  

  }


  
  return (
    <div>
      
    
      
      {/* <FaBars className='media-bar'  onClick={() =>{setOpen1(!open1)}} style={{cursor:'pointer'}}/> */}
      <div className='media-bar' onClick={handleClick}>
          {open1 ? (<IoCloseSharp id='close' style={{color:'#fff'}}/>) : (<FaBars id='bar'  style={{color:'#ee2a7b'}}/>)}
        </div>
      

      <div className='side' style={{width:isOpen ? "70px" : "250px"}}>

      <div className='bar' >
        
        <div className='logo-div'
         >
            <h1 onClick={toggle} style={{cursor:'pointer'}}>Wit</h1>
        </div>
        
        {/* <FaBars className='icon' onClick={toggle} style={{cursor:'pointer'}}/> */}
      
      </div>

     
        

      <NavLink to='/' className='link' activeclassName = 'active'>
      
      {/* <div >
      
        <FaBars className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

      </div> */}
    
    </NavLink>

      <NavLink to='/dashboard' className='link' activeclassName = 'active'>
      
        <div >
        
          <AiFillHome className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Home</h4>

        </div>
      
      </NavLink>


      <NavLink to='/books' className='link' activeclassName = 'active'>
      
        <div>
        
          <TbBooks  className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Books</h4>

        </div>
      
      </NavLink>

      <NavLink to='/borrowing' className='link' activeclassName = 'active'>
      
        <div>
          <TbBooks  className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Borrowing</h4>
        </div>
      
      </NavLink>

      <NavLink to='/categories' className='link' activeclassName = 'active'>
        <div>
          <TbBooks  className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Categories</h4>
        </div>
      </NavLink>

      <NavLink to='/librarian' className='link' activeclassName = 'active'>
      
        <div>
        
          <TbBooks  className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Librarians</h4>

        </div>
      
      </NavLink>

      <NavLink to='/publishers' className='link' activeclassName = 'active'>
      
        <div>
        
          <TbBooks  className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Publishers</h4>

        </div>
      
      </NavLink>

      <NavLink to='/users' className='link' activeclassName = 'active'>
      
        <div>
        
          <TbBooks  className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Users</h4>

        </div>
      
      </NavLink>

    
      <NavLink to='/settings' className='link' activeclassName = 'active'>
      
            <div>
            
                <IoIosSettings className='icon'/>
                <h4 style={{display:isOpen ? "none" : "block"}}>Settings</h4>

            </div>
        
        </NavLink>
     
      
      </div>


      












      <div className={`side2 ${open1 ? ' active' : 'inactive'}`}>

      <div className='bar' >
        
        
      
      </div>

      
      

      
        

        
      {/* <NavLink to='/' lassName='link' activeclassName = 'active'>
      
        <div >
        
        <FaBars className='icon'/>
        <h4 style={{display:isOpen ? "none" : "block"}}>Dashboard</h4>

      </div>
      
      </NavLink> */}


      <NavLink to='/dashboard' className='link' activeclassName = 'active'>
      
        <div >
        
          <AiFillHome className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Home</h4>

        </div>
      
      </NavLink>


      <NavLink to='/products' className='link' activeclassName = 'active'>
      
        <div>
        
          <FaCubes  className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Products</h4>

        </div>
      
      </NavLink>


      <NavLink to='/settings' className='link' activeclassName = 'active'>
      
        <div>
        
          <IoIosSettings className='icon'/>
          <h4 style={{display:isOpen ? "none" : "block"}}>Settings</h4>

        </div>
      
      </NavLink>

      
      
      </div>


    </div>
  )
}

export default Sidebar