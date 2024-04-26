import React from 'react';
import { CategoryCards } from '../utils/Data';




const Categories = () => {

  


  return (
    <div className='categories'>
      <div className='search'>
        <div className='input'>
          <p>Location</p>
          <input type="search" name="" id="" placeholder='eg Lagos'/>
        </div>
        
        <button>Search</button>
      </div>

      <div className='category-cards'>
        {
          CategoryCards && CategoryCards.map(item =>(
          <div key={item.id}  className='card' style={{ backgroundImage: `url(${item.background})` }}>
            {item.icon}
            {/* <div className="dk"></div> */}
            <p>{item.text}</p>
            <div className="dk"></div>

          </div>

           ))
          }

        
      </div>
    </div>
  )
}

export default Categories