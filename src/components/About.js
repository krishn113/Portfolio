import React from "react";
import { FaAward, FaUserGraduate } from "react-icons/fa";

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
            {/* Experience Card */}
            <div className="card">
              <FaAward className="text-3xl text-gray-700 mx-auto mb-4" />
              <h3 className="font-semibold">Experience</h3>
              <p className="text-gray-600">2+ years</p>
              <p className="text-gray-600">Frontend Development</p>
            </div>
            {/* Experience Card */}
            <div className="card">
              <FaAward className="text-3xl text-gray-700 mx-auto mb-4" />
              <h3 className="font-semibold">Experience</h3>
              <p className="text-gray-600">2+ years</p>
              <p className="text-gray-600">Frontend Development</p>
            </div>

            {/* Education Card */}
            <div className="card">
              <FaUserGraduate className="text-3xl text-gray-700 mx-auto mb-4" />
              <h3 className="font-semibold">Education</h3>
              <p className="text-gray-600">B.Sc. Bachelors Degree</p>
              <p className="text-gray-600">M.Sc. Masters Degree</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 text-gray-600 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorem cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
