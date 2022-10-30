import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Pages/LandingPage";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import NotFound from "./Components/NotFound";
import Professionals from "./Components/Professionals";
import ProfessionalInfo from "./Components/ProfessionalInfo";
import SharedLayout from "./Components/SharedLayout";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route exact path="professionals" element={<Professionals />} />
          <Route exact path="professionals/:professionalId" element={<ProfessionalInfo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="professionals/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
