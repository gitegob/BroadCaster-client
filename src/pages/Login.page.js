import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/Login.form';
import { Layout } from '../components/Layout';
import { GlobalState } from '../state/GlobalState';
import { ForgotPassword } from '../components/ForgotPassword';

export default () => {
  const { forgotPwd, setForgotPwd } = useContext(GlobalState);
  return (
    <Layout pageClass="logup-page" pageTitle="Log In - BroadCaster">
      <div className="middle">
        <div className="center">
          {forgotPwd ? <ForgotPassword />
            : (
              <>
                <h2>Log in</h2>
                <LoginForm />
                <br />
                <div className="bottom">
                  <Link className="bcm" onClick={() => setForgotPwd(true)} to="#">
                    Forgot Password?
                  </Link>
                  <Link className="psw" to="/signup">
                    Sign up
                  </Link>
                </div>
              </>
            )}

        </div>
      </div>
    </Layout>

  );
};
