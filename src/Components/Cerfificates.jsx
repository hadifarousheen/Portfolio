import { certificatelinks } from "../constants/certificateurls";
const Certificates = ({isDarkMode}) => {
  return (
    <div className={`h-fit mb-0 ${!isDarkMode && 'bg-white text-black'} `}>
      <h1 className={`text-center text-2xl md:text-4xl font-bold my-6 p-2 [text-shadow:4px_6px_10px_rgba(145,44,240,1)] ${isDarkMode?'text-white':'text-purple-900'}`}>
        CERTIFICATES
      </h1>
     
       <div className="   m-auto items-center justify-center p-4  ">
        
        <div className="flex flex-wrap gap-5 justify-center">
          {certificatelinks.map((card,index) => (
            <img
              className="h-40 w-40 md:h-60 md:w-80 rounded-lg "
              src={card} key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
