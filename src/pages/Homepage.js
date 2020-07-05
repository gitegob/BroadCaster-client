import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export const Homepage = () => {
  const navLinks = [
    {
      id: 1,
      name: 'Home',
      to: '/',
      className: 'nav-link active',
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
      className: 'nav-link',
    },
    {
      id: 4,
      name: 'About',
      to: '/about',
      className: 'nav-link',
    },
  ];
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('BroadCaster - Speak up and be heard');
  }, [setPageTitle]);
  return (
    <div className="index-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
          <div className="middle">
            <div className="description">
              <div className="slogan">
                <div className="broadcaster">Welcome to BroadCaster</div>
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
      <Footer />
    </div>
  );
};
