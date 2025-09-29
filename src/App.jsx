import { useEffect, useState } from "react";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";
import Certificates from "./Components/Cerfificates";

function App() {
const [isDarkMode, setIsDarkMode] = useState(() => {
  const stored = localStorage.getItem("isDarkMode");
  return stored ? JSON.parse(stored) : true; 
});

useEffect(() => {
  localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
}, [isDarkMode]);

  return (
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                <Element name="educationSection">
                  <Education isDarkMode={isDarkMode} />
                </Element>
                <Element name="skillsSection">
                  <Skills isDarkMode={isDarkMode} />
                </Element>
                <Element name="projectsSection">
                  <Projects isDarkMode={isDarkMode} />
                </Element>
                  <Element name="certificateSection">
                  <Certificates isDarkMode={isDarkMode} />
                </Element>
                <Element name="contactSection">
                  <Contact isDarkMode={isDarkMode} />
                </Element>
                <Footer isDarkMode={isDarkMode} />
              </>
            }
          />
        </Routes>
      </HashRouter>
  );
}

export default App;
