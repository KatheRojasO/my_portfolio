import React from 'react';
import techData from '../../techData.json';
import TechCard from './TechCard';
import '../Tech/Tech.css'

export default function Tech() {
  return (
    <div className='tech-section' id='tech'>
      <h1>Technologies I've used</h1>
      <p>To develop the different apps and websites, I had to learn:</p>

      <div className='tech-cards-container'>
				<div className='tech-cards'>
					{
						techData.map((tech) => {
							return <TechCard techName={tech.name}
											techIcon={tech.image}/>
						})
					}
				</div>
      </div>
    </div>
  )
}
