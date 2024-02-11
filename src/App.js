import React from "react";
import "./App.scss";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.js";
import Homepage from "./pages/Homepage.js";
import ProjectPage from "./pages/projectPage.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:projectName" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
