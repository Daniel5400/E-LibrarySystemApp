import React from 'react'
import Categories from '../Components/Categories';
import MultiCarousel from '../Components/MultiCarousel';

import StoreCard from '../Components/StoreCard';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Header from '../Components/Header';


const Home = () => {

    
  return (
    
        <div>
          <Header/>
          {/* <Slider/> */}
          <Hero/>
          <Categories/>
          <MultiCarousel/>
          {/* <MovieCarousel/> */}
          {/* <ParnerBg/> */}
          <StoreCard/>
          <Footer/>

        </div>
    
  )
}

export default Home