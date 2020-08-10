/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react';
import { logUp } from '../lib/auth';
import { BASEURL } from '../lib/utils';
import { ToastError } from './ToastError';
import { ToastSuccess } from './ToastSuccess';
import { GlobalContext } from '../contexts/GlobalContext';

export const SignupForm = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    loading: false,
    error: '',
    success: '',
  };
  const [state, setState] = useState(initialState);
  const [matchpwd, setmatchpwd] = useState(true);
  const [pwdvalid, setpwdvalid] = useState(true);
  const [pwdVisible, setPwdVisible] = useState({ pwd: false, confirmPwd: false });
  const { togglePwdShow } = useContext(GlobalContext);

  const dispError = (error) => {
    setState({
      ...state, success: '', error, loading: false,
    });
    setTimeout(() => { setState({ ...state, error: '', success: '' }); }, 3000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!matchpwd || !pwdvalid) dispError(!pwdvalid ? 'Password must be atleat 8 characters, with atleast a capital letter and a number' : 'Passwords do not match!');
    else {
      setState({ ...state, error: '', loading: true });
      logUp(state, '/auth/signup')
        .then((res) => {
          if (res.status !== 200) {
            dispError(res.error);
          } else {
            setState({ ...state, loading: false, success: 'A verification email has been sent to your account' });
            setTimeout(() => { setState({ ...state, error: '', success: '' }); }, 3000);
          }
        }).catch((err) => {
          console.log(err);
          dispError('Error connecting to server, please try again.');
        });
    }
  };
  const confirmingPwd = (e) => {
    if (e.target.value !== state.password) setmatchpwd(false);
    else setmatchpwd(true);
  };
  const changePwd = (e) => {
    setState({ ...state, password: e.target.value });
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,128}$/.test(e.target.value);
    if (!valid) setpwdvalid(false);
    else setpwdvalid(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="fname"
        required
        onChange={(e) => setState({ ...state, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lname"
        required
        onChange={(e) => setState({ ...state, lastName: e.target.value })}
      />
      <input
        type="email"
        placeholder="E-mail"
        name="email"
        required
        onChange={(e) => setState({ ...state, email: e.target.value })}
      />
      <div className="pwd-wrapper">
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="pwd"
          required
          onChange={changePwd}
        />
        <span
          role="button"
          className="material-icons"
          onClick={() => {
            setPwdVisible({ ...pwdVisible, pwd: !pwdVisible.pwd });
            togglePwdShow([document.querySelector('#pwd')]);
          }}
        >
          {pwdVisible.pwd ? 'visibility' : 'visibility_off'}
        </span>
      </div>
      {!pwdvalid && <ErrorDiv message="Password must be atleat 8 characters, with atleast a capital letter and a number" />}
      <div className="pwd-wrapper">
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          id="confirm-pwd"
          required
          onChange={confirmingPwd}
        />
        <span
          role="button"
          className="material-icons"
          onClick={() => {
            setPwdVisible({ ...pwdVisible, confirmPwd: !pwdVisible.confirmPwd });
            togglePwdShow([document.querySelector('#confirm-pwd')]);
          }}
        >
          {pwdVisible.confirmPwd ? 'visibility' : 'visibility_off'}
        </span>
      </div>
      {!matchpwd && <ErrorDiv message="Passwords do not match!" />}
      <input className="submit" disabled={state.loading || !pwdvalid || !matchpwd} type="submit" value={state.loading ? 'Sending...' : 'Create'} button="true" />
      {state.error && <ToastError message={state.error} />}
      {state.success && <ToastSuccess message={state.success} />}
    </form>
  );
};

export const ErrorDiv = ({ message }) => (
  <div style={{
    fontSize: '.8rem', width: 'fit-content', margin: 'auto', color: 'orange', padding: '.5rem', fontWeight: 'bold', textAlign: 'center',
  }}
  >
    {message}
  </div>
);
