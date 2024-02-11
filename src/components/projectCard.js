import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="relative isolate flex flex-col justify-end overflow-hidden shadow-lg rounded-2xl px-8 pb-8 pt-32 w-full mx-auto duration-500 hover:scale-105 cursor-pointer"
      id={project.id}
    >
      <Link to={project.id}>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 project__card"></div>
        <div className="flex flex-col items-start z-20 relative">
          <img src={project.logo} alt={project.title} className="h-16" />
          <div className="mt-5 line-clamp-3">{project.excerpt}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
