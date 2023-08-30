import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import IndexPage from "./pages/IndexPage";
import JoinPage from "./pages/JoinPage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<IndexPage /> } />
        <Route path="/join" element={<JoinPage /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
