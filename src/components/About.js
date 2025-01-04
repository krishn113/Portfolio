import React from "react";
import { FaAward, FaUserGraduate , FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="w-full px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-gray-600 uppercase">Get To Know More</p>
          <h2 className="text-3xl lg:text-4xl font-bold">About Me</h2>
        </div>

        {/* Information Section */}
        <div className="mx-auto">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <FaUserGraduate className="text-3xl text-gray-700 mx-auto mb-4" />
              <h3 className="font-semibold">Education</h3>
              <p className="text-gray-600">Pursuing B.Tech in Computer Science</p>
              <p className="text-gray-600">Indian Institute of Technology, Ropar</p>
            </div>
            <div className="card">
              <FaAward className="text-3xl text-gray-700 mx-auto mb-4" />
              <h3 className="font-semibold">Skills</h3>
              <p className="text-gray-600">React, JavaScript, HTML, CSS</p>
              <p className="text-gray-600">C++, Python, Data Structures</p>
            </div>
            <div className="card">
              <FaLightbulb className="text-3xl text-gray-700 mx-auto mb-4" />
              <h3 className="font-semibold">Data Structures and Algorithms</h3>
              <p className="text-gray-600">Codeforces Rating: 1089</p>
              <p className="text-gray-600">LeetCode: 150+ problems solved</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 text-gray-600 leading-relaxed">
            <p>
            I am a dedicated Computer Science student at IIT Ropar, deeply passionate about web development and algorithms. With expertise in crafting dynamic, user-friendly web applications using modern frameworks like React, I thrive on creating impactful digital experiences. Additionally, my active involvement in competitive programming helps me sharpen my problem-solving skills and think innovatively under pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
