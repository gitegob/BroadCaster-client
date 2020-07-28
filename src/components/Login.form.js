import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth/AuthContext';
import { useHistory } from 'react-router-dom';

export const LoginForm = () => {
  const initialState = {
    email: '',
    password: '',
    loading: false,
    error: '',
  };
  const [state, setState] = useState(initialState);
  const { logUp } = useContext(AuthContext);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, error: '', loading: true });
    logUp(state, `${process.env.REACT_APP_BASEURL}/api/v1/auth/login`)
      .then((res) => {
        setState({ ...state, loading: false });
        history.push('/dashboard');
      })
      .catch((err) => {
        setState({ ...state, error: 'Invalid Email or Password', loading: false });
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
          margin: '1rem auto', width: 'fit-content', color: 'whitesmoke', backgroundColor: 'crimson',
        }}
        >
          {state.error}
        </div>
      )}
    </form>
  );
};
