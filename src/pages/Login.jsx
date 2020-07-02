import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import { GlobalContext } from '../contexts/GlobalContext';
import { Nav } from '../components/Nav';

export const Login = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('Log In - BroadCaster');
  }, [setPageTitle]);
  const navLinks = [
    {
      id: 1, name: 'Home', to: '/', className: 'nav-link',
    },
    {
      id: 2, name: 'Sign Up', to: '/signup', className: 'nav-link',
    },
    {
      id: 3, name: 'Log In', to: '/login', className: 'nav-link active',
    },
    {
      id: 4, name: 'About', to: '/about', className: 'nav-link',
    },
  ];
  return (
    <div className="logup-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
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
