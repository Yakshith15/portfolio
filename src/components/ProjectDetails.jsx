import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-black/60 flex items-start justify-center overflow-y-scroll transition-all duration-500">
        <div className="max-w-[800px] w-full rounded-2xl m-[50px_12px] bg-card-dark text-text-primary-dark p-5 flex flex-col relative">
          <CloseRounded
            className="absolute top-2.5 right-5 cursor-pointer"
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img
            src={project?.image}
            alt={project?.title}
            className="w-full object-cover rounded-xl mt-7 shadow-md"
          />
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary-dark mt-2 mx-1.5">
            {project?.title}
          </h2>
          <p className="text-sm sm:text-base text-text-secondary-dark mx-1.5 mt-0.5">
            {project.date}
          </p>
          <div className="flex flex-wrap my-2">
            {project?.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-primary-dark m-1 p-1 px-2 rounded-lg bg-primary-dark/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm sm:text-base text-text-primary-dark mx-1.5 my-2">
            {project?.description}
          </p>
          {project.member && (
            <>
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary-dark mx-1.5 my-2">
                Members
              </h3>
              <div className="flex flex-col gap-1.5 flex-wrap mx-1.5 my-3">
                {project?.member.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-12 h-12 sm:w-[50px] sm:h-[50px] object-cover rounded-full mb-1 shadow-md"
                    />
                    <span className="text-sm sm:text-base font-medium text-text-primary-dark w-[200px]">
                      {member.name}
                    </span>
                    <a
                      href={member.github}
                      target="new"
                      className="text-text-primary-dark hover:text-primary-dark"
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      className="text-text-primary-dark hover:text-primary-dark"
                    >
                      <LinkedIn />
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="flex justify-end mt-3 gap-3">
            <a
              href={project?.github}
              target="new"
              className="w-full text-center text-sm sm:text-base font-semibold text-text-secondary-dark py-3 px-4 rounded-lg bg-bg-dark hover:bg-bg-dark/60 transition-all duration-500"
            >
              View Code
            </a>
            <a
              href={project?.webapp}
              target="new"
              className="w-full text-center text-sm sm:text-base font-semibold text-text-primary-dark py-3 px-4 rounded-lg bg-primary-dark hover:bg-primary-dark/80 transition-all duration-500"
            >
              View Live App
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
