import { Link } from "react-scroll";

const Header = ({isDarkMode,setIsDarkMode}) => {
  return (
    <div>
      <nav className="flex md:m-1">
        <li className={`list-none text-sm md:text-2xl md:ml-4 text-shadow-md ${
  isDarkMode ? 'text-shadow-white #ffff' : 'text-shadow-black text-black'
}`}>
  Hadifa Rousheen
</li>
        <div className="ml-auto flex  md:text-2xl">
          <span  onClick={()=>{
        setIsDarkMode(!isDarkMode)
          }}><img className="h-8 w-8 mt-1 mr-2" src={isDarkMode?"https://cdn-icons-png.flaticon.com/128/869/869869.png":"https://cdn-icons-png.flaticon.com/128/702/702471.png"}/></span>
          <Link
            to="skillsSection"
            smooth={true}
            duration={500}
            className={`cursor-pointer m-0.5   md:m-1 md:mr-4  hover:font-bold ${isDarkMode?'#ffffff':'text-black'}`}
          >
            Skills
          </Link>
          <Link
            to="projectsSection"
            smooth={true}
            duration={500}
            className={`cursor-pointer m-0.5 ml-1  md:m-1 md:mr-4  hover:font-bold ${isDarkMode?'#ffffff':'text-black'}`}
          >
            Projects
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
