import { Link } from "react-scroll";

const Header = () => {
  return (
    <div>
      <nav className="flex m-1">
        <li className="list-none text-2xl ml-4 text-shadow-md text-shadow-white">
          Hadifa Rousheen
        </li>
        <div className="ml-auto flex  text-2xl">
          <Link
            to="skillsSection"
            smooth={true}
            duration={500}
            className="cursor-pointer  m-1 mr-4  hover:font-bold"
          >
            Skills
          </Link>
          <Link
            to="projectsSection"
            smooth={true}
            duration={500}
            className="cursor-pointer  m-1 mr-4  hover:font-bold"
          >
            Projects
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
