import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "../data/constants";
import EducationCard from "./Cards/EducationCard";

const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col justify-center items-center relative z-10 pb-15 md:p-0 bg-bg-dark"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] pt-10 gap-3">
        <h2 className="text-4xl text-center font-semibold mt-5 text-text-primary-dark md:mt-3 md:text-3xl">
          Education
        </h2>
        <p className="text-lg text-center max-w-[600px] text-text-secondary-dark md:mt-3 md:text-base">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
        <div className=" max-w-[1000px] mt-3 flex flex-col items-center justify-center gap-3 md:items-end">
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={edu} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" style={{ background: "#2563EB" }} />
                  {index !== 4 && (
                    <TimelineConnector style={{ background: "#2563EB" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
