import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/Pages/LandingPage";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import NotFound from "./Components/NotFound";
import Professionals from "./Components/Professionals";
import ProfessionalInfo from "./Components/ProfessionalInfo"; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="professionals" element={<Professionals />} />
        <Route path="professionalInfo" element={<ProfessionalInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
