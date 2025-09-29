import { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-scroll";
import resumePDF from "../assets/resume.pdf";

const Hero = ({isDarkMode,setIsDarkMode}) => {
  const fullName = "HADIFA ROUSHEEN";
  const [text, setText] = useState("");
useEffect(()=>{
 let i = 0;
  const type = () => {
    setText((prev) => {
      return prev + fullName.charAt(i++);
    });
    if (i < fullName.length) {
      setTimeout(type, 150);
    }
  };
  type()
},[])
useEffect(() => {

  const particlesContainer = document.getElementById("particles-js");
  if (particlesContainer) {
    particlesContainer.innerHTML = ""; 
  }
  const configPath = isDarkMode ? "/particles.json" : "/particleslight.json";
  if (window.particlesJS) {
    window.particlesJS.load("particles-js", configPath, function () {
    });
  } 
}, [isDarkMode]);

  return (
    <div  className="relative w-full h-screen">
      <div
        id="particles-js"
        className={`absolute  md:top-0 left-0 w-full h-full -z-10 ${!isDarkMode && 'bg-white'} ` }
      />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="w-[90%] md:w-1/2 mx-auto h-full flex flex-col items-center justify-center md:p-4 mt-[-2%]">
        <div className="text-2xl md:text-4xl text-center p-4 ">
          <h1 className={`p-4 font-extrabold ${!isDarkMode &&'text-black'}`}>Hello, I'm</h1>
          <h1 className="p-4 font-extrabold text-purple-700">{text}</h1>
          <h1 className={`p-4 font-extrabold ${!isDarkMode &&'text-black'}`}>A FullStack Developer</h1>
          <p className={`text-sm md:text-xl my-3 ${!isDarkMode &&'text-black'}`}>
          A passionate Full-Stack Developer specializing in building dynamic and scalable web applications. I enjoy transforming ideas into functional products using MERN stack (MongoDB, Express.js, React, Node.js) and modern tools like Redux, Tailwind CSS, and REST APIs{" "}
          </p>
          <div className="flex justify-center mt-4">
            <Link
              to="contactSection"
              smooth={true}
              duration={500}
              className={`not-[]:cursor-pointer text-lg md:text-xl border border-purple-900 bg-purple-600 text-white mx-2 px-2 py-1 rounded hover:bg-purple-700 transition 
              ${isDarkMode?'hover:border-white':' hover:border-black'}`}
            >
              Contact Me
            </Link>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg md:text-xl border border-purple-900 bg-purple-600 shadow-xl/30 shadow-purple-800 text-white mx-2 px-2 py-1 rounded hover:bg-purple-700 transition ${isDarkMode?' hover:border-white':' hover:border-black'}`}
            >
              Resume
            </a>
          </div>
          <Link to="educationSection" smooth={true} duration={500}>
            <img
              className="border border-gray-900 bg-white size-10 animate-bounce m-auto rounded-full mt-8 p-3 h-13 w-13 "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVR4nO2Q3QpBURCF940bPzNR/pLiceTJvATPIGYOl1y7k4gojifwM+OOdjklnA7OudL5atVuT3utPcuYD3EylyaD7gnUpcylYaKGQF1GvVoR6C7yAL6be4oDXuC4oiA4rigIjiv674om5pp4DrB3oUwZhQlkw6AtAuk8BzBI+z7bEAp9HUCg4xdTP4GOvt8gfcgzyDTInFAW/eSpZH5hmDoWCGXmHyBLJ3kqmzB0U8cioczf/HzVy50rocw9BlmpMsr6ofOtg1qLxNxjiFq3dVnZ86cPb4tHXIrFhHgSAAAAAElFTkSuQmCC"
              alt="long-arrow-down"
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
