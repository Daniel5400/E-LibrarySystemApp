import React from 'react';
// import '../App.css';
import Sidebar from '../Components/Sidebar';
import { TbBooks } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import Header2 from '../Components/Header2';

const DashboardHomepage = () => {

  const Cards = [

    {
      text: 'Books',
      icon: TbBooks,
      link: '/books'
      // background:'#6861ce'
    },
    {
      text: 'Borrowings',
      icon: TbBooks,
      link: '/borrowing'
      // background:'#6861ce'
    },
    {
      text: 'Categories',
      icon: TbBooks,
      link: '/categories'
      // background:'#6861ce'
    },
    {
      text: 'Librarians',
      icon: TbBooks,
      link: '/librarian'
      // background:'#6861ce'
    },
    {
      text: 'Publishers',
      icon: TbBooks,
      link: '/publishers'
      // background:'#6861ce'
    },
    {
      text: 'Users',
      icon: TbBooks,
      link: '/users'
      // background:'#6861ce'
    },

    {
      text: 'Settings',
      icon: IoIosSettings,
      link: '/settings'
      // background:'#f25961'

    }

  ];


  return (
    <div className='dashb'>


      <section className='dashboard'>

        <Sidebar />

        <main>
          <Header2 />

          <section className='left'>

            {/* <div className='search'>
                <img src={s} alt="" />
                <input type="search" placeholder='Search' />
              </div> */}

            <div className='cards-container'>

              {Cards && Cards.map(({ icon, text, background, link }, index) => {
                return (

                  <Link to={link} className="cardss">
                    <div className='card1'>
                      <div className='icon-card' style={{ backgroundColor: background }}>

                        <i className='icons'>{React.createElement(icon)}</i>

                      </div>

                      <div className='card-text'>
                        <p>{text}</p>
                      </div>
                    </div>

                  </Link>


                )
              })}



            </div>
          </section>

        </main>

      </section>
    </div>
  )
}

export default DashboardHomepage