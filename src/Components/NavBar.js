import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" activeClassName="active">
              EXPERIENCE
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" activeClassName="active">
              SKILLS
            </NavLink>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={toggleMenu}>
          {/* Hamburger menu icon, you can use an icon library like Font Awesome */}
          &#9776;
        </div>
        {showMenu && (
          <div className="menu">
            <NavLink exact to="/" activeClassName="active" onClick={toggleMenu}>
              ABOUT
            </NavLink>
            <NavLink to="/experience" activeClassName="active" onClick={toggleMenu}>
              EXPERIENCE
            </NavLink>
            <NavLink to="/projects" activeClassName="active" onClick={toggleMenu}>
              PROJECTS
            </NavLink>
            <NavLink to="/skills" activeClassName="active" onClick={toggleMenu}>
              SKILLS
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;

