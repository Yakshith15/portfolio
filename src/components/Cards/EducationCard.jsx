import React from "react";

const EducationCard = ({ education }) => {
  return (
    <div className="w-[650px] rounded-lg shadow-lg p-6 sm:p-5 sm:w-[600px] flex flex-col gap-5 sm:gap-4 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5 relative overflow-hidden border border-[#2563EB] bg-card-dark min-h-[300px]">
      <div className="w-full flex gap-4">
        <div className="w-full flex flex-col">
          <div className="text-2xl sm:text-xl font-semibold text-text-primary-dark/90 leading-relaxed">
            {education.school}
          </div>
          <div className="text-lg sm:text-base font-medium text-text-secondary-dark/90 mt-2">
            {education.degree}
          </div>
          <div className="text-base sm:text-sm font-normal text-text-secondary-dark/80 mt-1">
            {education.date}
          </div>
        </div>
      </div>
      <div className="text-lg sm:text-base font-medium text-text-secondary-dark/90">
        <b>Grade: </b>
        {education.grade}
      </div>
      <div className="w-full text-base sm:text-sm font-normal text-text-primary-dark/90 mb-4">
        <span className="overflow-hidden line-clamp-6 group-hover:line-clamp-none leading-relaxed">
          {education.desc}
        </span>
      </div>
    </div>
  );
};

export default EducationCard;
