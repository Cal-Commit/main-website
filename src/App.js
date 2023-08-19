import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/pages" element={<Navbar />} /> {/* Placeholder */}
      </Routes>
    </>
  );
}

export default App;
