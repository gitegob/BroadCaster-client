import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { Logo } from '../components/Logo';

export const Homepage = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('BroadCaster - Speak up and be heard');
  }, [setPageTitle]);
  return (
    <div className="index-page">
      <div className="whole-body">
        <div className="grid-container">
          <nav>
            <Logo />
            <ul className="nav-links">
              <Link to="/">
                <li className="nav-link active">Home</li>
              </Link>
              <Link to="/signup">
                <li className="nav-link">Sign Up</li>
              </Link>

              <Link to="/login">
                <li className="nav-link">Log In</li>
              </Link>
              <Link to="/about">
                <li className="nav-link">About</li>
              </Link>
            </ul>
          </nav>
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
