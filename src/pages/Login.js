import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  useEffect(() => {
    document.title = 'Log In - BroadCaster';
  }, []);
  return (
    <div className="logup-page">
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
                <li className="nav-link">Home</li>
              </Link>
              <Link to="/signup">
                <li className="nav-link">Sign Up</li>
              </Link>

              <Link to="/login">
                <li className="nav-link active">Log In</li>
              </Link>
              <Link to="/about">
                <li className="nav-link">About</li>
              </Link>
            </ul>
          </nav>

          <div className="middle">
            <div className="center">
              <h2>Log in</h2>
              <LoginForm />
              <br />
              <div className="bottom">
                <span className="bcm">Not a member?</span>
                <a className="psw" href="#">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
