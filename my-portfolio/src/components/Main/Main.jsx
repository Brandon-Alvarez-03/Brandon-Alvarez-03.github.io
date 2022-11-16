import React from "react";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Projects from "../Projects/Projects.jsx";
import Resume from "../Resume/Resume.jsx";
import {Routes, Route} from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default Main;
