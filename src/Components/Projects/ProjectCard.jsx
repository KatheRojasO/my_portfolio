import React, { useState } from "react";
import "../Projects/ProjectCard.css";
import Modal from './Modal'

export default function ProjectCard({ projectName, projectImage, description, projectTech, isProjectDone }) {
  
  const cardImage = require(`../../assets/img/${projectImage}`);

  const [isOpen, setIsOpen] = useState (false);


  return (
    <div className="project-card">
        { isProjectDone ?
          <div className="project-info">
            <img src={cardImage} alt="not found" onClick={() => setIsOpen(true)} />
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <div className="modal-container">
                <img src={cardImage} alt="not found"/>
                <div className="modal-info">
                  <h1>{projectName}</h1>
                  <ul className="tech-list">
                    {projectTech.map((tech) => {
                      return (<li ><button className="tech-options">{tech}</button></li>);
                    })}
                  </ul>
                  <p className="description">{description}</p>
                  <button className="btn-app"> Visit website/App</button>
                  <button className="btn-git"> Git repository</button>
                </div>
              </div>
            </Modal>
            <p>{projectName}</p>
          </div>
          : 
          <div className="project-info disabled">
            <img src={cardImage} alt="not found" />
            <p>{projectName}</p>
          </div>
        }
    </div>
  );
}
