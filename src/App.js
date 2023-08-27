import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import CCFooter from "./components/footer";
import AboutUs from "./components/about";
import VolunteerWithUs from "./components/volunteer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />      
      <AboutUs />
      <VolunteerWithUs />
      <CCFooter />
    </>
  );
}

export default App;
