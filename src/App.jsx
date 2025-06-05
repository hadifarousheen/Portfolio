import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";

function App() {
  return (
    <div className=" text-white">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />

                <Element name="educationSection">
                  <Education />
                </Element>

                <Element name="skillsSection">
                  <Skills />
                </Element>
                <Element name="projectsSection">
                  <Projects />
                </Element>
                <Element name="contactSection">
                  <Contact />
                </Element>

                <Footer />
              </>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
