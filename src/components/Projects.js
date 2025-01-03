import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data";
const Projects = () => {
  return (
    <div className="w-full py-10">
      {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-600 uppercase">BROWSE MY RECENT</p>
          <h2 className="text-3xl lg:text-4xl font-bold">Projects</h2>
        </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
