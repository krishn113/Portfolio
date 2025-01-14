import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
  <div className="w-full h-screen flex flex-col justify-center items-center gap-5 text-center mx-auto">
    <img
      src={profile}
      alt="Krishna Agarwal"
      className="rounded-full w-32 hover:scale-105 transition-transform duration-300"
    />
    <h3 className="text-xl">Hi! I'm Krishna Agarwal</h3>
    <h2 className="text-2xl font-serif">Building solutions one line of code at a time</h2>
    <p className="max-w-2xl mx-auto">
    A driven computer science student passionate about software development, problem-solving, and exploring innovative technologies. I thrive on tackling challenges and continuously expanding my skill set to stay at the forefront of the tech world.
    </p>
    <div className="flex justify-center lg:justify-start space-x-4 mt-6">
      <a
        href="/Krishna_Agarwal.pdf"
        download
        className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-500 transition"
      >
        Download CV
      </a>
      <a
        href="#contact"
        className="px-8 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-pink-500 hover:to-purple-500 transition"
      >
        Contact Me
      </a>
    </div>
    <div className="flex justify-center lg:justify-start space-x-4 mt-4 text-3xl">
      <a href="https://www.linkedin.com/in/krishna-agarwal-236b6b271/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-gray-800 hover:text-blue-600 transition" />
      </a>
      <a href="https://github.com/krishn113" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-800 hover:text-gray-600 transition" />
      </a>
    </div>
  </div>
  );
};

export default Hero;
