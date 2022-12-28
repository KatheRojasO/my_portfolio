import React from 'react';
import '../Projects/ProjectCard.css'

export default function ProjectCard({projectName, projectImage}) {

	const cardImage = require (`../../assets/img/${projectImage}`);

  return (
    <div className='project-card'>
			<div className='project-info'>
				<img src={cardImage} alt='not found'/>
				<p>{projectName}</p>
			</div>
      
    </div>
  )
}
