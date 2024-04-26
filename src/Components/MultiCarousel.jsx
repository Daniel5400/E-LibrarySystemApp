import React,{useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import {BsTicketPerforated} from 'react-icons/bs';
import { Literature, MultiCards, Fantasy, Science } from '../utils/Data';
import { Link } from 'react-router-dom';
// import Modal from "react-modal";
// import DisplayDataByCategory from '../Dashboard/Components/DisplayDataByCategory';

const MultiCarousel = ({category}) => {

  const data = JSON.parse(localStorage.getItem('formData')) || [];
  const filteredData = data.filter(item => item.category === category);


  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  // function openModal(){
  //   setIsModalOpen(true)
  // }


    const [list1, setList1] = useState(true)
    const [list2, setList2] = useState(false)
    const [list3, setList3] = useState(false)
    const [list4, setList4] = useState(false)


    function fiction(){
        setList1(true)
        setList2(false)
        setList3(false)
        setList4(false)
    }

    function fantasy(){
        setList2(true)
        setList3(false)
        setList1(false)
        setList4(false)
    }

    function science(){
        setList3(true)
        setList2(false)
        setList1(false)
        setList4(false)
    }

    function literature(){
      setList3(false)
      setList2(false)
      setList1(false)
      setList4(true)
  }

  return (
    <div className='multi' id='shop'>

      {/* <h1>Popular Tickets  <span> Explore More  </span> </h1> */}
      
      {/* <Carousel responsive={responsive}>
        {
          MultiCards && MultiCards.map(item =>(
            <div key={item.id} className='item'>
              <img src={item.img} alt="" />
              <p className='access'>Access Ticket</p>
              <h2>{item.text}</h2>
              <div className='ticket'>
                <BsTicketPerforated className='icon'/>
                <span>{item.ticket}</span>
              </div>

              <div className='get'>
                <p>{item.price}</p>
                <Link to='/ticket'><button>Get Ticket</button></Link>

              </div>
              
            </div>
            ))
        }
        
      </Carousel> */}


      <div className='pricing'>
        <h2>Best Sellers</h2>


        <div className='price-plan'>
            <span onClick={fiction} className={` ${list1 ? 'actives' : 'inactive'}`}>Fiction</span>
            <span onClick={fantasy} className={` ${list2 ? 'actives' : 'inactive'}`}>Fantasy</span>
            <span onClick={science} className={` ${list3 ? 'actives' : 'inactive'}`}>Science</span>
            <span onClick={literature} className={` ${list4 ? 'actives' : 'inactive'}`}>Literature</span>
        </div>

        


          <Carousel responsive={responsive}>

        
        {filteredData.map((item, index) => (
          <div key={index} className='item'>
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>

            <div className='get'>
                <p>{item.price}</p>
                <Link to='/ticket'><button>Add To Cart</button></Link>

              </div>
            
            {/* Display image here if needed */}
          </div>
        ))}
     

      </Carousel>


        {list1 ? (

          <Carousel responsive={responsive}>
          {
            MultiCards && MultiCards.map(item =>(
              <div key={item.id} className='item'>
                <img src={item.img} alt="" />
                <h2>{item.text}</h2>
                {/* <div className='ticket'>
                  <BsTicketPerforated className='icon'/>
                  <span>{item.ticket}</span>
                </div> */}

                <div className='get'>
                  <p>{item.price}</p>
                  <Link to='/ticket'><button>Add To Cart</button></Link>

                </div>
                
              </div>
              ))
          }

          </Carousel>

        ) : null}

        {list2 ? (

          <Carousel responsive={responsive}>
          {
            Fantasy && Fantasy.map(item =>(
              <div key={item.id} className='item'>
                <img src={item.img} alt="" />
                <h2>{item.text}</h2>
                {/* <div className='ticket'>
                  <BsTicketPerforated className='icon'/>
                  <span>{item.ticket}</span>
                </div> */}

                <div className='get'>
                  <p>{item.price}</p>
                  <Link to='/ticket'><button>Add To Cart</button></Link>

                </div>
                
              </div>
              ))
          }

          </Carousel>
        ) : null}


        {list3 ? (

          <Carousel responsive={responsive}>
          {
            Science && Science.map(item =>(
              <div key={item.id} className='item'>
                <img src={item.img} alt="" />
                <h2>{item.text}</h2>
                {/* <div className='ticket'>
                  <BsTicketPerforated className='icon'/>
                  <span>{item.ticket}</span>
                </div> */}

                <div className='get'>
                  <p>{item.price}</p>
                  <Link to='/ticket'><button>Add to Cart</button></Link>

                </div>
                
              </div>
              ))
          }

          </Carousel>
        ) : null}



        {list4 ? (

          <Carousel responsive={responsive}>
          {
            Literature && Literature.map(item =>(
              <div key={item.id} className='item'>
                <img src={item.img} alt="" />
                <h2>{item.text}</h2>
                {/* <div className='ticket'>
                  <BsTicketPerforated className='icon'/>
                  <span>{item.ticket}</span>
                </div> */}

                <div className='get'>
                  <p>{item.price}</p>
                  <Link to='/ticket'><button>Add To Cart</button></Link>

                </div>
                
              </div>
              ))
          }

          </Carousel>
        ) : null}

        {/* <DisplayDataByCategory category="men" /> */}

      </div>

    </div>
  )
}

export default MultiCarousel