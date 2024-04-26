import React from 'react'
import dp from '../../Assets/user.png'
import note from '../../Assets/note.png'
// import { FaCircleUser } from "react-icons/fa6";

const Header2 = () => {
  return (
    <div className='header2'>

    <div>
      {/* <FaCircleUser className='icon'/> */}
      <img src={note} alt="" className='note'/>
      <img src={dp} alt="" />
    </div>
    
</div>
  )
}

export default Header2