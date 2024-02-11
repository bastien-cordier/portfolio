import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data.js";

export default function ProjectPage(darkMode) {
  const { projectName } = useParams();
  const project = projectsData.find((project) => project.id === projectName);

  if (!project) {
    <>Aucun projet trouvé</>;
  }
  return (
    <div className="bg-white dark:bg-dark-grey text-black dark:text-white mt-20">
      <div className="container">
        <h2 className="mt-5 text-5xl font-bold">{project.title}.</h2>
        <div className="mt-5 text-3xl">🧠 {project.excerpt}</div>
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: project.description.html }}
        />
        <div className="mt-5 text-2xl font-bold">Skills for this project:</div>
        <div className="mt-5 flex flex-wrap gap-5">
          {project.stack.map((tech, index) => (
            <div
              key={index}
              className="bg-light-grey dark:bg-grey h-12 p-6 rounded-full flex items-center justify-center cursor-pointer duration-500"
            >
              <img
                src={`/assets/stacks/${tech}.svg`}
                alt={tech}
                className="h-6"
              />
              <p className="text-center pl-2">{tech}.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
