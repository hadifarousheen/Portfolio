const Education = ({ isDarkMode }) => {
  const bgClass = isDarkMode ? "bg-transparent" : "bg-white";
  const textClass = isDarkMode ? "text-white" : "text-black";
  const shadowClass = isDarkMode ? "shadow-white" : "shadow-black";
  const borderClass = isDarkMode ? "border-gray-800" : "border-black";

  return (
    <div className={`h-fit ${bgClass}`}>
      <h1
        className={`text-center p-1 md:p-4 text-2xl md:text-4xl font-bold 
        [text-shadow:4px_6px_10px_rgba(145,44,240,1)] ${isDarkMode?'text-white':'text-purple-900'}`}
      >
        EDUCATION
      </h1>
      <ul className="timeline timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="bg-purple-600 rounded-full h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start timeline-box">
            <div className={`p-2 ${borderClass} border ${shadowClass} shadow-xl/30 ${bgClass} ${textClass} ${!isDarkMode && 'rounded-lg'}`}>
              <h1 className="text-xl md:text-3xl">
                Bachelor's of Technology (2021–2025)
              </h1>
              <h2 className="text-md md:text-2xl">
                Jyothishmathi Institute of Technology and Science
              </h2>
              <h2 className="text-md md:text-2xl">Computer Science Engineering</h2>
              <h3 className="text-md md:text-xl">CGPA : 8.3</h3>
            </div>
          </div>
          <hr className="bg-purple-600" />
        </li>
        <li>
          <hr className="bg-purple-600" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="bg-purple-600 rounded-full h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end timeline-box">
            <div className={`p-2 ${borderClass} border ${shadowClass} shadow-xl/30 ${bgClass} ${textClass}  ${!isDarkMode && 'rounded-lg'}`}>
              <h1 className="text-xl md:text-3xl">XII Standard (2019–2021)</h1>
              <h2 className="text-md md:text-2xl">Alphores Junior College</h2>
              <h3 className="text-md md:text-xl">Percentage : 93</h3>
            </div>
          </div>
          <hr className="bg-purple-600" />
        </li>
        <li>
          <hr className="bg-purple-600" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="bg-purple-600 rounded-full h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start timeline-box">
            <div className={`p-2 ${borderClass} border ${shadowClass} shadow-xl/30 ${bgClass} ${textClass}  ${!isDarkMode && 'rounded-lg'}`}>
              <h1 className="text-xl md:text-3xl">X Standard (2018–2019)</h1>
              <h2 className="text-md md:text-2xl">Paramita Learner's Foundation</h2>
              <h3 className="text-md md:text-xl">CGPA : 9.5</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
