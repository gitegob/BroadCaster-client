import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { AuthContext } from '../contexts/auth/AuthContext';
import { ToastSuccess } from './ToastSuccess';
import { ToastError } from './ToastError';

export const ForgotPassword = () => {
  const { setForgotPwd } = useContext(GlobalContext);
  const { recoverPwd } = useContext(AuthContext);
  const [email, setemail] = useState('');
  const [state, setState] = useState({ success: '', error: '', loading: false });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({
      ...state, success: '', error: '', loading: true,
    });
    let resp;
    try {
      resp = await recoverPwd({ email });
      setState({ ...state, loading: false });
      if (resp.status === 200) setState({ ...state, success: resp.message });
      else setState({ ...state, error: resp.error });
      setTimeout(() => setState({ ...state, success: '', error: '' }), 3000);
    } catch (error) {
      console.log(error);
      setState({ ...state, error: 'Sorry, there was an error sending the email, Please try again', loading: false });
      setTimeout(() => setState({ ...state, success: '', error: '' }), 3000);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <h2>Password recovery</h2>
        <input type="email" placeholder="Enter your email" onChange={(e) => setemail(e.target.value)} />
        <input className="submit" type="submit" value={state.loading ? 'Sending...' : 'Send'} button="true" />
      </form>
      <div className="bottom">
        <Link className="psw" onClick={() => setForgotPwd(false)} to="#">
          Back to Log in
        </Link>
      </div>
      {state.success && <ToastSuccess message={state.success} />}
      {state.error && <ToastError message={state.error} />}
    </>
  );
};
