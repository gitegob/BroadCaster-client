import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { Nav } from '../components/Nav';

export const Homepage = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('BroadCaster - Speak up and be heard');
  }, [setPageTitle]);
  const navLinks = [
    { name: 'Home', to: '/', className: 'nav-link active' },
    { name: 'Sign Up', to: '/signup', className: 'nav-link' },
    { name: 'Log In', to: '/login', className: 'nav-link' },
    { name: 'About', to: '/about', className: 'nav-link' },
  ];
  return (
    <div className="index-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
          <div className="middle">
            <div className="description">
              <div className="slogan">
                <div className="broadcaster">BroadCaster</div>
                <br />
                <br />
                <div>To let you speak up and BE HEARD</div>
              </div>
              <br />
              <br />
              <br />
              <Link to="/signup" className="get-started" button="true">
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
