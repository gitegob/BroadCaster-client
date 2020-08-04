import React from 'react';
import { Link } from 'react-router-dom';
import { SignupForm } from '../components/Signup.form';
import { Layout } from '../components/Layout';

export default () => (
  <Layout pageClass="logup-page" pageTitle="Sign Up - BroadCaster">
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
  </Layout>
);
