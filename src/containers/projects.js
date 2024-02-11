import React from "react";
import { ScrollRevealWrapperFromLeft } from "../components/scrollReaval.js";
import ProjectCard from "../components/projectCard.js";
import projectsData from "../data.js";

const Projects = () => {
  return (
    <div>
      <section
        className="bg-light-grey text-black dark:bg-dark-grey dark:text-white py-10"
        id="projects"
      >
        <div className="container">
          <ScrollRevealWrapperFromLeft>
            <h3 className="text-4xl font-bold">My Projects 💻</h3>
            <div className="projects__wrapper py-8 grid gap-6 pt-8">
              {projectsData.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </div>
          </ScrollRevealWrapperFromLeft>
        </div>
      </section>
    </div>
  );
};

export default Projects;
