import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logUp } from '../lib/auth';
import { pusher } from '../lib/utils';

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
    logUp(state, `${process.env.REACT_APP_BASEURL}/api/v1/auth/login`)
      .then((res) => {
        localStorage.setItem('accessToken', res.data.token);
        setState({ ...state, loading: false });
        pusher(history, '/');
      })
      .catch((err) => {
        setState({ ...state, error: 'Invalid Email or Password', loading: false });
        setTimeout(() => { setState({ ...state, error: '' }); }, 2000);
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
      {state.error && (
        <div style={{
          margin: '1rem auto', width: 'fit-content', textAlign: 'center', color: 'whitesmoke', backgroundColor: 'crimson',
        }}
        >
          {state.error}
        </div>
      )}
    </form>
  );
};
