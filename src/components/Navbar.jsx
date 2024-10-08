import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { Bio } from "../data/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    updateDarkMode(isDarkMode);
  }, []);

  const updateDarkMode = (isDarkMode) => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "#0F172A" : "#F0F9FF";
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    updateDarkMode(newDarkMode);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 w-full h-20 flex items-center justify-between px-4 max-w-full mx-auto z-[9999] transition-all duration-300 shadow-md">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="flex items-center text-decoration-none">
          <DiCssdeck size="3rem" className="text-primary" />
          <span className="ml-2 font-bold text-lg text-gray-800 dark:text-white">
            Portfolio
          </span>
        </Link>
        <div className="hidden md:flex items-center justify-center gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <GitHubButton href={Bio.github} />
          {/* <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
        </div>
        {/* <div className="md:hidden flex items-center gap-4">
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <FaBars
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl cursor-pointer text-gray-800 dark:text-white"
          />
        </div> */}
        {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-800 dark:text-white font-medium hover:text-primary dark:hover:text-primary transition-colors duration-300"
  >
    {children}
  </a>
);

const GitHubButton = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 px-4 py-2 rounded-full font-medium"
  >
    Github Profile
  </a>
);

// const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
//   <button
//     onClick={toggleDarkMode}
//     className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
//   >
//     {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
//   </button>
// );

const MobileMenu = ({ isOpen, setIsOpen }) => (
  <div
    className={`md:hidden flex flex-col absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 transition-all duration-300 ${
      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  >
    <NavLink href="#about" onClick={() => setIsOpen(false)}>
      About
    </NavLink>
    <NavLink href="#skills" onClick={() => setIsOpen(false)}>
      Skills
    </NavLink>
    <NavLink href="#projects" onClick={() => setIsOpen(false)}>
      Projects
    </NavLink>
    <NavLink href="#education" onClick={() => setIsOpen(false)}>
      Education
    </NavLink>
    <div className="px-4 py-2">
      <GitHubButton href={Bio.github} />
    </div>
  </div>
);

export default Navbar;