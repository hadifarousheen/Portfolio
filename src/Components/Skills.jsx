import {
  imagelinks,
  languageslinks,
  frameworklinks,
  dataBaselinks
} from "../constants/imageurls";

const Skills = ({isDarkMode}) => {
  return (
    <div className={`h-fit mb-0 ${!isDarkMode && 'bg-white text-black'} `}>
      <h1 className={`text-center text-2xl md:text-4xl font-bold p-2 [text-shadow:4px_6px_10px_rgba(145,44,240,1)] ${isDarkMode?'text-white':'text-purple-900'}`}>
        SKILLS
      </h1>
      <div className="w-2/3   m-auto p-4">
        <h2 className="text-lg md:text-2xl font-bold text-center my-auto mr-auto [text-shadow:4px_6px_10px_rgba(145,44,240,1)] block pb-5">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-5 justify-center">
          {imagelinks.map((card,index) => (
            <img
              className="h-20 w-20 md:h-40 md:w-40 rounded-lg hover:rotate-45 "
              src={card} key={index}
            />
          ))}
        </div>
      </div>
      <div className=" w-2/3  m-auto items-center justify-center p-4  ">
        <h2 className="text-lg md:text-2xl font-bold my-auto text-center mr-auto [text-shadow:4px_6px_10px_rgba(145,44,240,1)] pb-5">
          Frameworks
        </h2>
        <div className="flex flex-wrap gap-5 justify-center">
          {frameworklinks.map((card,index) => (
            <img
              className="h-20 w-20 md:h-40 md:w-40 rounded-lg hover:rotate-45"
              src={card} key={index}
            />
          ))}
        </div>
      </div>
      <div className="  w-2/3 items-center justify-center m-auto p-4">
        <h2 className="text-lg md:text-2xl font-bold my-auto text-center mr-auto [text-shadow:4px_6px_10px_rgba(145,44,240,1)] pb-5">
          Languages
        </h2>
        <div className="flex flex-wrap gap-5 justify-center">
          {languageslinks.map((card,index) => (
            <img
              className="h-20 w-20 md:h-40 md:w-40 rounded-lg hover:rotate-45"
              src={card} key={index}
            />
          ))}
        </div>
      </div>
       <div className=" w-2/3  m-auto items-center justify-center p-4  ">
        <h2 className="text-lg md:text-2xl font-bold my-auto text-center mr-auto [text-shadow:4px_6px_10px_rgba(145,44,240,1)] pb-5">
         Database
        </h2>
        <div className="flex flex-wrap gap-5 justify-center">
          {dataBaselinks.map((card,index) => (
            <img
              className="h-20 w-20 md:h-40 md:w-40 rounded-lg hover:rotate-45"
              src={card} key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
