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
        <Link to={link.to} key={link.id}>
          <li className={link.className}>{link.name}</li>
        </Link>
      ))}
    </ul>
  </nav>
);
