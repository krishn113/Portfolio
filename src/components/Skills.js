import React from "react";
import { skills } from "../data";

const Skills = () => {

  return (
    <div className="w-full py-10 flex flex-col items-center">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-gray-600 uppercase">Technical Skills</p>
        <h2 className="text-3xl lg:text-4xl font-bold">Tech Stack</h2>
      </div>

      {/* Skills Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-6 border border-gray-400 bg-white dark:bg-transparent shadow-md rounded-lg  cursor-pointer hover:-translate-y-2 duration-500"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="h-13 w-13 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
