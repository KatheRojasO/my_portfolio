import React from "react";
import data from "../../JsonFiles/projectData.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectCards = data.map((project) => {
    return <ProjectCard key={project.id} project={project} />;
  });

  return (
    <div id="projects">
      <div className="container">
        <div>
          <h2>Projects</h2>
          <p>
            I've been brushing my skills as a frontend developer and here you
            can find my last art pieces which were created during a frontend
            course with Novare Potencial.
          </p>
        </div>
        <div className="projects-cards">{projectCards}</div>
      </div>
    </div>
  );
}
