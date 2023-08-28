import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CCFooter from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<IndexPage /> } />
      </Routes>
      <CCFooter />
    </>
  );
}

export default App;
