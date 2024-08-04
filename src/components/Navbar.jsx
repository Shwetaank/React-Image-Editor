import "./navbar.css";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <h1 className="title">React-Image Editor </h1>
        <div className="icon">
          <a
            href="https://github.com/Shwetaank"
            target="_blank"
            rel="noopener noreferrer"
            title="Give ⭐ on Github"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
