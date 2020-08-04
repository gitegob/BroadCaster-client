import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/Login.form';
import { Layout } from '../components/Layout';

export default () => (
  <Layout pageClass="logup-page" pageTitle="Log In - BroadCaster">
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
