import React from "react";
import { skills } from "../data/constants";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center relative z-10 bg-bg-dark"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1100px] gap-3 p-8">
        <h2 className="text-4xl text-center font-semibold mt-5 text-text-primary-dark md:mt-3 md:text-3xl">
          Skills
        </h2>
        <p className="text-lg text-center max-w-[600px] text-text-secondary-dark md:text-base">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
        <div className="w-full flex flex-wrap mt-8 gap-8 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-full max-w-[500px] bg-card-dark border border-secondary shadow-card hover:shadow-card-hover rounded-2xl p-5 md:max-w-[400px] md:p-3 sm:max-w-[330px] transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-text-secondary-dark mb-5 text-center">
                {skill.title}
              </h3>
              <div className="flex justify-center flex-wrap gap-3 mb-5">
                {skill.skills.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="text-base font-normal text-text-primary-dark border border-text-primary-dark/80 rounded-xl px-4 py-3 flex items-center justify-center gap-2 md:text-sm md:px-3 md:py-2 sm:text-sm sm:px-3 sm:py-1.5"
                  >
                    <img src={item.image} alt={item.name} className="w-6 h-6" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
