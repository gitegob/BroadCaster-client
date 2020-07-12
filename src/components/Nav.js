/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/auth/AuthContext';

export const Nav = ({ navLinks }) => {
  const { logOut } = useContext(AuthContext);
  const handleClick = (link) => {
    if (link.logOut) {
      logOut();
    }
  };
  return (
    <nav>
      <h3 className="logo">
        <Link to="/">
          <span className="broad">B</span>
          <span className="caster">roadcaster</span>
        </Link>
      </h3>
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li className={link.className} key={link.id} onClick={() => handleClick(link)}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
