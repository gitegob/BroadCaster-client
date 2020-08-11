/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { GlobalState } from '../state/GlobalState';

export const Layout = ({
  children, pageClass, pageTitle,
}) => {
  const { setPageTitle } = useContext(GlobalState);
  const authed = localStorage.getItem('accessToken');
  useEffect(() => {
    if (pageTitle) setPageTitle(pageTitle);
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
