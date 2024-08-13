import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
// import HeroSection from "./components/HeroSection";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Experience from "./components/Experience";
// import Education from "./components/Education";
// import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <Router>
      <div className={`w-full overflow-x-hidden ${darkMode ? "dark" : ""}`}>
        <Navbar />
        {/* <main className="bg-bg dark:bg-darkBg">
          <HeroSection />
          <div className="w-full bg-gradient-to-br from-purple-800/15  to-blue-800/15 clip-polygon">
            <Skills />
          </div>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <div className="w-full bg-gradient-to-br from-purple-800/15  to-blue-800/15 clip-polygon">
            <Education />
            <Contact />
          </div>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </main> */}
      </div>
    </Router>
  );
}

export default App;
