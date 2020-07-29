import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/Login.form';
import { GlobalContext } from '../contexts/GlobalContext';
import { Layout } from '../components/Layout';

export const Login = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('Log In - BroadCaster');
  }, [setPageTitle]);
  return (
    <Layout pageClass="logup-page">
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
    </Layout>

  );
};
