import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Header from '../Components/Header';


const Contact = () => {
  return (
    <>
    <Header/>
      <section className='all-c'>
      

        <div className='contact'>
        

          <div className="cont">
            

            <div className='form-c'>
              <h1>Contact Us</h1>
                <form className='form' >
                  <input type="text" placeholder='Full Name' />
                  <input type="email" placeholder='Email' />
                  <input type="tel" placeholder='Phone Number' />
                  <textarea name="" id=""  placeholder='Message'></textarea>
                  <button type="submit">Send</button>
                </form>
            </div>
          </div>
      </div>


        <div className="contact-us">

          <div>

            <IoCallSharp className='c-icons'/>
            <h3>Call</h3>
            <a href="tel:07049623723">+234-704-962-3723</a>
          </div>

          <div>
            <IoLogoWhatsapp className='c-icons'/>
            <h3>WhatsApp</h3>
            <a href="tel:07049623723">+234-704-962-3723</a>
          </div>

          <div>
            <MdEmail className='c-icons'/>
            <h3>Email</h3>
            <a href="mailto:">allied@gmail.com</a>
          </div>

        </div>



      </section>
    </>
    
  )
}

export default Contact