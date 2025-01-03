import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <div
      key={index}
      className="relative flex flex-col justify-between project-card rounded-xl overflow-hidden transition"
    >
      {/* GitHub Button */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-5 right-5 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 transition"
        size={50}
      >
        <FaGithub size={20} />
      </a>

      {/* Project Image */}
      <div className="p-4">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-52 rounded-xl"
        />
      </div>

      {/* Project Content */}
      <div className="pb-6 px-5">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {project.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Website Button */}
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 block text-center mx-auto bg-gray-800 dark:bg-gray-600 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-500 transition"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
