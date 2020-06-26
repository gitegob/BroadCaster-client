import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SignupForm } from '../components/SignupForm';
import { GlobalContext } from '../contexts/GlobalContext';
import { Logo } from '../components/Logo';

export const Signup = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('Sign Up - BroadCaster');
  }, [setPageTitle]);
  return (
    <div className="logup-page">
      <div className="whole-body">
        <div className="grid-container">
          <nav>
            <Logo />
            <ul className="nav-links">
              <Link to="/">
                <li className="nav-link">Home</li>
              </Link>
              <Link to="/signup">
                <li className="nav-link active">Sign Up</li>
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
            <div className="center">
              <h2>Join BroadCaster</h2>
              <SignupForm />
              <br />
              <div className="bottom">
                <span className="bcm">Already a member?</span>
                <Link className="psw" to="/login">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
