import React from 'react';
import '../About/About.css';
const img = require('../../assets/me_about.jpg');

export default function About() {
  return (
    <div className='about-section' id='about'>
			<h1>About Me</h1>
			<p>Hello everybody! My name is Katheryn and I’m a junior frontend developer ready to take my career to the next level. <br/>
				<br/>During my studies I’ve developed some apps and websites, some better than the others. I wanted to save you the hard work so I decided to build this website to show you my best projects.
			</p>
			<div className='image-container'>
				<img src={img} alt="not found"></img>
			</div>
    </div>
  )
}
