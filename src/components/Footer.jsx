import React from "react";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../data/constants";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full py-8 flex justify-center bg-card-dark">
      <footer className="w-full max-w-[1200px] flex flex-col gap-3.5 items-center p-4 text-text-primary-dark">
        <h1 className="font-semibold text-xl text-primary-dark">Yakshith</h1>
        <nav className="w-full max-w-[800px] mt-2 flex flex-row gap-8 justify-center md:flex-wrap md:gap-4 md:justify-center md:text-center md:text-sm">
          <a
            href="#about"
            className="text-text-primary-dark text-lg hover:text-primary-dark transition-colors duration-200 md:text-base"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-text-primary-dark text-lg hover:text-primary-dark transition-colors duration-200 md:text-base"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-text-primary-dark text-lg hover:text-primary-dark transition-colors duration-200 md:text-base"
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-text-primary-dark text-lg hover:text-primary-dark transition-colors duration-200 md:text-base"
          >
            Education
          </a>
        </nav>
        <div className="flex mt-4">
          <a
            href={Bio.facebook}
            target="display"
            className="mx-4 text-2xl text-text-primary-dark hover:text-primary-dark transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href={Bio.twitter}
            target="display"
            className="mx-4 text-2xl text-text-primary-dark hover:text-primary-dark transition-colors duration-200"
          >
            <FaCode />
          </a>
          <a
            href={Bio.linkedin}
            target="display"
            className="mx-4 text-2xl text-text-primary-dark hover:text-primary-dark transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href={Bio.insta}
            target="display"
            className="mx-4 text-2xl text-text-primary-dark hover:text-primary-dark transition-colors duration-200"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="mt-6 text-sm text-text-secondary-dark text-center">
          &copy; 2024 Yakshith. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
