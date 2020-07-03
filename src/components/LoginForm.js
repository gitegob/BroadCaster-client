import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth/AuthContext';
import { useHistory } from 'react-router-dom';

export const LoginForm = () => {
  const initialState = {
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState);
  const { logIn } = useContext(AuthContext);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(state, 'http://localhost:5000/api/v1/auth/login');
    history.push('/dashboard');
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
      <input className="submit" type="submit" value="Log In" button="true" />
    </form>
  );
};
