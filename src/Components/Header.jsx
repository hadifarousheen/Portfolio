import { Link } from "react-scroll";

const Header = () => {
  return (
    <div>
      <nav className="flex md:m-1">
        <li className="list-none text-sm md:text-2xl md:ml-4 text-shadow-md text-shadow-white">
          Hadifa Rousheen
        </li>
        <div className="ml-auto flex  md:text-2xl">
          <Link
            to="skillsSection"
            smooth={true}
            duration={500}
            className="cursor-pointer m-0.5   md:m-1 md:mr-4  hover:font-bold"
          >
            Skills
          </Link>
          <Link
            to="projectsSection"
            smooth={true}
            duration={500}
            className="cursor-pointer m-0.5 ml-1  md:m-1 md:mr-4  hover:font-bold"
          >
            Projects
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
