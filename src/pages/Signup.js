import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SignupForm } from '../components/SignupForm';
import { GlobalContext } from '../contexts/GlobalContext';
import { Nav } from '../components/Nav';

export const Signup = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('Sign Up - BroadCaster');
  }, [setPageTitle]);
  const navLinks = [
    { name: 'Home', to: '/', className: 'nav-link' },
    { name: 'Sign Up', to: '/signup', className: 'nav-link active' },
    { name: 'Log In', to: '/login', className: 'nav-link' },
    { name: 'About', to: '/about', className: 'nav-link' },
  ];
  return (
    <div className="logup-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
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
