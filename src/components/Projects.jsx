import React, { useState } from "react";
import ProjectCard from "./Cards/ProjectCards";
import { projects } from "../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <div
      id="projects"
      className="bg-bg-dark bg-gradient-to-br from-secondary-dark/10 to-transparent flex flex-col justify-center items-center relative z-10 clip-path-polygon"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] py-10 pb-25 gap-3 sm:gap-4">
        <h2 className="text-4xl sm:text-5xl font-semibold mt-5 text-text-primary-dark">
          Projects
        </h2>
        <p className="text-lg sm:text-xl text-center max-w-[600px] text-text-secondary-dark">
          I have worked on a wide range of projects. From web apps to AI applications. Here are some of my projects.
        </p>
        <div className="flex border-2 border-primary-dark text-primary-dark text-base sm:text-lg font-medium rounded-xl my-5 sm:my-6">
          {["All", "Web Applications", "AI Stuff"].map(
            (item, index) => (
              <React.Fragment key={item}>
                {index !== 0 && <div className="w-0.5 bg-primary-dark"></div>}
                <button
                  className={`px-4 py-2 sm:px-5 sm:py-3 rounded-md cursor-pointer transition-colors ${
                    toggle === item
                      ? "bg-primary-dark/20"
                      : "hover:bg-primary-dark/10"
                  }`}
                  onClick={() => setToggle(item)}
                >
                  {item.toUpperCase()}
                </button>
              </React.Fragment>
            )
          )}
        </div>
        <div className="flex justify-center items-center gap-7 flex-wrap">
          {(toggle === "all"
            ? projects
            : projects.filter((item) => item.category === toggle)
          ).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
