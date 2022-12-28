import React from 'react';
import data from '../../data.json';
import ProjectCard from './ProjectCard';
import '../Projects/Projects.css'

export default function Projects() {

  return (
    <div className='project-section' id='projects'>
      <h1>Projects</h1>
      <p>I've been brushing my skills as a frontend developer and 
        here you can find my last art pieces which were created 
        during a frontend course with Novare Potencial.
      </p>

      <div className='projects-cards-container'>
        <div className='projects-cards'>
          {
            data.map((project) => {
              return <ProjectCard projectName={project.name}
                      projectImage={project.image}/>
            })
          }
        </div>
        
      </div>
    </div>
  )
}
