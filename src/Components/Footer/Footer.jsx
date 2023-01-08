import React from "react";
import linkedinIcon from '../../assets/icons/linkedin.png';
import githubIcon from '../../assets/icons/github.png';
import instagramICon from '../../assets/icons/instagram.png';
import copyICon from '../../assets/icons/copy.png';


export default function Footer() {
  return (
    <div className="footer-section">
      <div className="social-media">
        <img src={linkedinIcon} alt='linkedin-icon'/>
        <img src={githubIcon} alt='gitgub-icon'/>
        <img src={instagramICon} alt='instagram-icon'/>
      </div>
      <div className="copy-right">
        <img src={copyICon} alt='instagram-icon'/> 
        <p className="copy-right-text"> 2022 Katheryn Rojas </p>
      </div>
    </div>
  );
}
