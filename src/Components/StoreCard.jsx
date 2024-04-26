import React from 'react';
import store1 from '../Assets/store1.webp';
import store2 from '../Assets/store2.jpeg';
// import { Link } from 'react-router-dom';

const StoreCard = () => {
  return (
    <div className='storeCards'>

        <div className="store">
            <h2>Find Nice Books, Anywhere, Anytime</h2>
            <p>Bring the market place to your place no need to step out to sell your items or buy new items do it on the go</p>

        </div>

        <div className="store1">
            <img src={store1} alt="" />
            <p>PH Branch</p>
            <a href='#shop'><button>Shop</button></a>
            
        </div>

        <div className="store1">
            <img src={store2} alt="" />
            <p>Lagos Branch</p>
            <a href='#shop'><button>Shop</button></a>
            
        </div>
        
    </div>
  )
}

export default StoreCard