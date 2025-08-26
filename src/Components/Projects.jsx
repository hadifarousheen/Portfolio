import { projectsdata } from "../constants/projectsdata";
const Projects = ({isDarkMode}) => {
  return (
    <div className={`h-fit mt-0 ${!isDarkMode && 'bg-white'}`}>
      <h1 className={`text-center text-2xl md:text-4xl font-bold p-2 [text-shadow:4px_6px_10px_rgba(145,44,240,1)] ${isDarkMode?'text-white':'text-purple-900'} `}>
        PROJECTS
      </h1>
      {projectsdata.map((proj, i) => (
        <div
          key={i}
          className={`w-full md:w-3/4 md:m-auto flex flex-col md:flex-row gap-4 mt-4 rounded-lg shadow-xl/30 ${isDarkMode?'shadow-white':'shadow-black '} md:mt-8`}
        >
          <div className={`w-full h-[400px] overflow-hidden rounded-lg shadow-xl/30 ${isDarkMode?'shadow-white':'shadow-black border-2 border-black'} `}>
            <div className="scale-[0.75] origin-top-left w-[133.33%] h-[133.33%]">
              <iframe
                src={proj.website}
                className="rounded-lg w-full h-full border-none"
              ></iframe>
            </div>
          </div>
          <div className={`w-full md:w-1/2 p-2 md:p-6 shadow-xl/30 ${isDarkMode?'shadow-white':'shadow-black border-2 border-black'} hover:scale-105 rounded-lg`}>
            <h1 className="text-lg md:text-3xl text-purple-700 font-bold">
              {proj.title}
            </h1>
            <p className={`text-sm md:text-xl mt-2 ${isDarkMode?'text-white':'text-black'}`}>{proj.description}</p>
            <div className="flex flex-col md:flex-row gap-2 mt-4">
              <a
                href={proj.code}
                target="_blank"
                className="text-center md:text-xl border border-purple-950 bg-purple-600 rounded-lg p-2 w-full shadow-sm shadow-purple-600"
              >
                Code
              </a>
              <a
                href={proj.live}
                target="_blank"
                className="text-center md:text-xl border border-purple-950 bg-purple-600 rounded-lg p-2 w-full shadow-sm shadow-purple-600"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
