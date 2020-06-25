import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  useEffect(() => {
    document.title = 'BroadCaster - Speak up and be heard';
  }, []);
  return (
    <div className="index-page">
      <div className="whole-body">
        <div className="grid-container">
          <nav>
            <h3 className="logo">
              <Link to="/">
                <span className="broad">B</span>
                <span className="caster">roadcaster</span>
              </Link>
            </h3>
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
              <Link to="/signup">
                <a href="#" className="get-started" button="true">
                  GET STARTED
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
