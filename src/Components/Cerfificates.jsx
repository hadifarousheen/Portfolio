import react from "../assets/certificates/react.jfif";
import freecodecamp from '../assets/certificates/freecodecamp.jfif';
import css from '../assets/certificates/css.jfif';
import javaScript from '../assets/certificates/javaScript.jfif';
import nodejs from '../assets/certificates/nodejs.jfif';


const Certificates = ({ isDarkMode }) => {
  return (
    <div className={`h-fit mb-0  ${!isDarkMode && "bg-white text-black"} `}>
      <h1
        className={`text-center text-2xl md:text-4xl font-bold  px-2 py-6 [text-shadow:4px_6px_10px_rgba(145,44,240,1)] ${
          isDarkMode ? "text-white" : "text-purple-900"
        }`}
      >
        CERTIFICATES
      </h1>

      <div className="m-auto items-center justify-center p-4  ">
        <div className="flex flex-wrap gap-5 justify-center">
          <img className="h-40 w-40 md:h-60 md:w-80 rounded-lg " src={freecodecamp} />
           <img className="h-40 w-40 md:h-60 md:w-80 rounded-lg " src={css} />
            <img className="h-40 w-40 md:h-60 md:w-80 rounded-lg " src={javaScript} />
             <img className="h-40 w-40 md:h-60 md:w-80 rounded-lg " src={react} />
              <img className="h-40 w-40 md:h-60 md:w-80 rounded-lg " src={nodejs} />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
