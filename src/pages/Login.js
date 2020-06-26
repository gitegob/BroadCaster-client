import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { GlobalContext } from '../contexts/GlobalContext';
import { Logo } from '../components/Logo';

export const Login = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('Log In - BroadCaster');
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
                <Link className="psw" to="/signup">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
