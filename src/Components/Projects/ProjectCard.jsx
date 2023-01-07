import React, { useState } from "react";
import "../Projects/ProjectCard.css";
import Modal from "./Modal";

export default function ProjectCard( { project }) {

  const { name, image, done} = project
  console.log(project);

  const cardImage = require(`../../assets/img/${image}`);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-card">
      <div className="project-info">
        { done ? null : <div className="coming-soon">Coming Soon</div>}
        <img
          src={cardImage}
          alt="not found"
          onClick={() => (done ? setIsOpen(true) : null)}
        />
        <p>{name}</p>
      </div>
      <Modal project={project} open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
