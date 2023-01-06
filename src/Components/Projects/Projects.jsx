import React from "react";
import data from "../../data.json";
import ProjectCard from "./ProjectCard";
import "../Projects/Projects.css";

export default function Projects() {
  return (
    <div id="projects">
      <div className="project-info-container">
        <h1>Projects</h1>
        <p>
          I've been brushing my skills as a frontend developer and here you can
          find my last art pieces which were created during a frontend course
          with Novare Potencial.
        </p>
      </div>
      <div className="projects-cards-container">
        <div className="projects-cards">
          {data.map((project) => {
            return (
              <ProjectCard
                projectName={project.name}
                projectImage={project.image}
                description={project.description}
                projectTech={project.tech}
                isProjectDone={project.done}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
