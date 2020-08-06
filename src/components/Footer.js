import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <div className="footer">
    &copy; 2020 - BroadCaster &nbsp;
    <span> &nbsp; </span>
    <Link to="https://github.com/gitego-brian/BroadCaster">API</Link>
    <Link to="/about#about">About</Link>
  </div>
);
