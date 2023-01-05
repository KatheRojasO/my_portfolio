import React from "react";
import data from "../../data.json";
import ProjectCard from "./ProjectCard";
import "../Projects/Projects.css";

export default function Projects() {
  // Components
  const Items = data.map((project) => {
    return (
      <ProjectCard
        projectName={project.name}
        projectImage={project.image}
        description={project.description}
        projectTech={project.tech}
        isProjectDone={project.done}
      />
    );
  });

  return (
    <div id="projects">
      <div className="container">
        <div className="info-container">
          <h2>Projects</h2>
          <p>
            I've been brushing my skills as a frontend developer and here you
            can find my last art pieces which were created during a frontend
            course with Novare Potencial.
          </p>
        </div>
        <div className="cards-container">{Items}</div>
      </div>
    </div>
  );
}
