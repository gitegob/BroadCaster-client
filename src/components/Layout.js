/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { GlobalContext } from '../contexts/GlobalContext';

export const Layout = ({
  children, pageClass, pageTitle, authed,
}) => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    if (pageTitle)setPageTitle(pageTitle);
  }, []);
  return (
    <div className={`${pageClass}`}>
      <div className="whole-body">
        <Nav authed={authed} />
        <div className="grid-container">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};
