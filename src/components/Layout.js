import React from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';

const navLinks = [
  {
    id: 1,
    name: 'Home',
    to: '/',
    className: 'nav-link',
  },
  {
    id: 2,
    name: 'Sign Up',
    to: '/signup',
    className: 'nav-link',
  },
  {
    id: 3,
    name: 'Log In',
    to: '/login',
    className: 'nav-link active',
  },
  {
    id: 4,
    name: 'About',
    to: '/about',
    className: 'nav-link',
  },
];
export const Layout = ({ children, pageClass }) => {
  return (
    <div className={`${pageClass}`}>
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};
