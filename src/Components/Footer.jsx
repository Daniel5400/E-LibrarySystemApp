import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';



const Footer = () => {
  return (
   
        <footer>
            <div className="foot1 foot">
                <div>
                    <p className='link'>About</p>
                    <p className='link'>Support</p>
                    <p className='link'>Faq</p>
                    <p className='link'>Blog</p>
                </div>
                <div className='f-icons'>
                    <BsLinkedin className='icon'/>
                    <BsTwitter className='icon'/>
                    <BsFacebook className='icon'/>
                    <BsInstagram className='icon'/>

                </div>
            </div>

            <div className="foot1 foot2">
                <div>
                    <p>Copyrights © 2023 Deelaa</p>
                </div>
                <div className='priv'>
                    <span className='span'>Privacy</span>
                    <span className='span'>Legal</span>
                    <span className='span'>Feedback</span>

                </div>

            </div>
        </footer>
   
  )
}

export default Footer