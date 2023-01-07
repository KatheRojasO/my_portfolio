import React from 'react';
import Footer from '../Footer/Footer';
import '../Contact/Contact.css';
import phone from '../../assets/icons/phone.png';
import envelope from '../../assets/icons/envelope.png';
import location from '../../assets/icons/location.png';



export default function Contact() {

  return (
    <div id='contact'>
      <div className='contact-paragraph'>
        <h1>Contact</h1>
        <p>Here you can find my contact information in case you're
          interested in work with me
        </p>
      </div>
      <div className='info-section'>
        <div className='phone'>
          <img src={phone} alt='phone_icon'/>
          <p> 073-555-55</p>
        </div>
        
        <div className='email'>
          <img src={envelope} alt='mail_icon'/>
          <p> developer@developer.com</p>
        </div>
        
        <div className='location'>
          <img src={location} alt='location_icon'/>
          <p>Stockholm, Sweden</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
