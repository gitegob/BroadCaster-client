import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logUp } from '../lib/auth';
import { pusher, BASEURL } from '../lib/utils';
import { ToastError } from './ToastError';

export const LoginForm = () => {
  const initialState = {
    email: '',
    password: '',
    loading: false,
    error: '',
  };
  const [state, setState] = useState(initialState);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, error: '', loading: true });
    logUp(state, `${BASEURL}/api/v1/auth/login`)
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
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={(e) => setState({ ...state, password: e.target.value })}
      />
      <input className="submit" disabled={state.loading} type="submit" value={state.loading ? 'Sending...' : 'Log In'} button="true" />
      {state.error && <ToastError message={state.error} />}
    </form>
  );
};
