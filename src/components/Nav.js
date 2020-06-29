import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = ({ navLinks }) => {
  return (
    <nav>
      <h3 className="logo">
        <Link to="/">
          <span className="broad">B</span>
          <span className="caster">roadcaster</span>
        </Link>
      </h3>
      <ul className="nav-links">
        {navLinks.map((navLink, i) => (
          <Link to={navLink.to} key={i}>
            <li className={navLink.className}>{navLink.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
