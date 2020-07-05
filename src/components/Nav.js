import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = ({ navLinks }) => (
  <nav>
    <h3 className="logo">
      <Link to="/">
        <span className="broad">B</span>
        <span className="caster">roadcaster</span>
      </Link>
    </h3>
    <ul className="nav-links">
      {navLinks.map((link) => (
        <li className={link.className} key={link.id}>
          <Link to={link.to}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
