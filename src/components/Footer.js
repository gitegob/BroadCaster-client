import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <div className="footer">
    &copy; 2020 - Brian Gitego &nbsp;
    <Link replace={window.location.pathname === '/about' ? true : false} to="/about#about">ABOUT</Link>
  </div>
);
