/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { logUp } from '../lib/auth';
import { pusher } from '../lib/utils';
import { ToastError } from './ToastError';
import { GlobalState } from '../state/GlobalState';

export const LoginForm = () => {
  const initialState = {
    email: '',
    password: '',
    loading: false,
    error: '',
  };
  const [state, setState] = useState(initialState);
  const [pwdVisible, setPwdVisible] = useState(false);
  const { togglePwdShow } = useContext(GlobalState);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, error: '', loading: true });
    logUp(state, '/auth/login')
      .then((res) => {
        if (res.status !== 200) {
          setState({ ...state, error: res.error, loading: false });
          setTimeout(() => { setState({ ...state, error: '' }); }, 3000);
        } else {
          localStorage.setItem('accessToken', res.data.token);
          setState({ ...state, loading: false });
          pusher(history, '/');
        }
      })
      .catch((err) => {
        console.log(err);
        setState({ ...state, error: 'Error connecting to server, please try again.', loading: false });
        setTimeout(() => { setState({ ...state, error: '' }); }, 3000);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
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
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
        <span
          role="button"
          className="material-icons"
          onClick={() => {
            setPwdVisible(!pwdVisible);
            togglePwdShow([document.querySelector('#pwd')]);
          }}
        >
          {pwdVisible ? 'visibility' : 'visibility_off'}
        </span>
      </div>
      <input className="submit" disabled={state.loading} type="submit" value={state.loading ? 'Sending...' : 'Log In'} button="true" />
      {state.error && <ToastError message={state.error} />}
    </form>
  );
};
