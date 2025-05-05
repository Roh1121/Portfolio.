// Navbar.js
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../../context/them';
import { projects, skills, contact } from '../../portfolio';
import './Navbar.css';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className="nav__list"
      >
        <li className="nav__list-item">
            <Link
              to="/"
              onClick={toggleNavList}
              className="link link--nav"
            >
              HOME
            </Link>
          </li>
        {projects.length ? (
          <li className="nav__list-item">
            <Link
              to="/#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              PROJECTS
            </Link>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav__list-item">
            <Link
              to="/#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              SKILLS
            </Link>
          </li>
        ) : null}

        <li className="nav__list-item">
          <Link
            to="/certificates"
            onClick={toggleNavList}
            className="link link--nav"
          >
            CERTIFICATES
          </Link>
        </li>

        {contact.email ? (
          <li className="nav__list-item">
            <Link
              to="/contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              CONTACT ME
            </Link>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
