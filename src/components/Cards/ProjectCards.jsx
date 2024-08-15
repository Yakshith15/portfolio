import React from "react";

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <div
      onClick={() => setOpenModal({ state: true, project: project })}
      className="w-[330px] h-[490px] bg-card dark:bg-card-dark cursor-pointer rounded-lg shadow-lg overflow-hidden p-5 flex flex-col gap-3.5 transition-all duration-500 ease-in-out hover:translate-y-[-10px] hover:shadow-xl hover:brightness-110"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[180px] bg-white dark:bg-gray-800 rounded-lg shadow-md object-cover"
      />
      <div className="flex flex-wrap items-center gap-2 mt-1">
        {project.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-normal text-primary dark:text-primary-dark bg-primary bg-opacity-15 dark:bg-opacity-25 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-0 px-0.5">
        <h3 className="text-xl font-semibold text-text-secondary dark:text-text-secondary-dark line-clamp-2">
          {project.title}
        </h3>
        <p className="text-xs text-text-secondary text-opacity-80 dark:text-text-secondary-dark dark:text-opacity-80 ml-0.5">
          {project.date}
        </p>
        <p className="mt-2 text-text-secondary text-opacity-90 dark:text-text-secondary-dark dark:text-opacity-90 line-clamp-3">
          {project.description}
        </p>
      </div>
      <div className="flex items-center pl-2.5">
        {project.member?.map((member, index) => (
          <img
            key={index}
            src={member.img}
            alt={member.name}
            className="w-[38px] h-[38px] rounded-full -ml-2.5 bg-white dark:bg-gray-800 shadow-md border-3 border-card dark:border-card-dark"
          />
        ))}
      </div>
      {/* Uncomment if you want to add the button back
      <button className="hidden w-full p-2.5 bg-white dark:bg-gray-800 text-text-black dark:text-white text-sm font-bold rounded-lg cursor-pointer transition-all duration-800 ease-in-out group-hover:block">
        View Project
      </button>
      */}
    </div>
  );
};

export default ProjectCards;
