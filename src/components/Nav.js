/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logOut } from '../lib/auth';

export const Nav = ({ authed }) => {
  const history = useHistory();
  const logOutHandler = () => {
    logOut(history);
  };
  return (
    <nav>
      <h3 className="logo">
        <Link to="/">
          <span className="broad">B</span>
          <span className="caster">roadcaster</span>
        </Link>
      </h3>
      {authed && (
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="nav-link logout" onClick={logOutHandler}>
            Log Out
          </li>
        </ul>
      )}
      {!authed && (
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="nav-link">
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
