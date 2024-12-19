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
        <div className="section-description">
          <h2 className="title-red">Latest</h2>
          <h2>Projects</h2>
          <div className="projects-paragraph-container">
            <p>
              In this section, you'll find some of the projects I've developed, showcasing both
              fullstack and frontend development. Each project shows my ability to design and
              implement practical solutions, solve real problems, and continuously improve my
              skills. These projects reflect my passion for creating efficient, scalable, and
              user-friendly software.
            </p>
          </div>
        </div>
        <div className="projects-cards">{projectCards}</div>
      </div>
    </div>
  );
}
