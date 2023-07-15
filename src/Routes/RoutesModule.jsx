import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Components/About/About";
import Homepage from "../Components/Homepage/Homepage";
// import Experience from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Education from "../Components/Education/Education";
import Skills from "../Components/Skills/Skills";

const RoutesModule = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/skills" element={<Skills/>} />
        {/* <Route path="/certificates" element={<Certificates/>} /> */}
        {/* <Route path="spacex" element={<Spacex />} />
        <Route path="rocket/:id" element={<Rocket />} />
        {/* wild card characters */}
      </Routes>
    </>
  );
};

export default RoutesModule;
