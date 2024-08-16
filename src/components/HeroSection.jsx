import React from "react";
import Typewriter from "typewriter-effect";
import { Bio } from "../data/constants";

const HeroSection = () => {
  return (
    <div
      id="about"
      className="relative bg-card-light dark:bg-card-dark flex justify-center py-20 px-8 sm:py-16 sm:px-4 z-10 clip-polygon"
    >
      <div className="relative flex w-full max-w-[1300px]">
        {/* Left Side - Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-bold text-5xl text-text-primary dark:text-text-primary-dark leading-[68px] sm:text-center sm:text-4xl sm:leading-[48px] sm:mb-2">
            Hi, I am <br /> {Bio.name}
          </h1>
          <div className="ml-16 font-semibold text-3xl flex gap-3 text-text-primary dark:text-text-primary-dark leading-[68px] sm:text-center sm:text-2xl sm:leading-[48px] sm:mb-4">
            I am a
            <span className="text-primary dark:text-primary-dark cursor-pointer">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className="text-xl leading-8 mb-10 text-text-primary/95 dark:text-text-primary-dark/95 sm:text-center sm:text-base">
            {Bio.description}
          </p>
          <a
            href={Bio.resume}
            target="display"
            className="inline-block w-full max-w-[300px] text-center py-4 text-white rounded-[20px] cursor-pointer text-xl font-semibold transition-all duration-200 bg-gradient-to-r from-secondary-dark to-primary-dark hover:scale-105 hover:brightness-110 shadow-xl shadow-bg-dark sm:py-3 sm:text-lg ml-24"
          >
            Check Resume
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 justify-end items-center ml-8 hidden md:flex">
          <img
            alt="work icons"
            loading="lazy"
            decoding="async"
            className="w-full h-full max-w-[800px] max-h-[800px] rounded-full object-cover sm:max-w-[500px] sm:max-h-[500px]"
            src="public/mainIconsdark.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
