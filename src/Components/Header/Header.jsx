import React from 'react';
import {Link} from 'react-scroll';
import '../Header/Header.css';
const logo = require('../../assets/logo-5x.png');

export default function Header() {
  return (
    <div className='nav-main'>
      <nav className='nav-header'>
        <img className='header-logo'src={logo} alt='page_logo'></img>
        <ul className='menu'>
          <li className='nav-item'>
            <Link to='about' spy={true} smooth={true} offset={700} duration={500}>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='projects' spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
          </li>
          <li className='nav-item'>
            <Link to='tech' spy={true} smooth={true} offset={-100} duration={500}>Tech</Link>
          </li>
          <li className='nav-item'>
            <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>      
    </div>
  )
}
