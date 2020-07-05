import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth/AuthContext';

export const LoginForm = () => {
  const initialState = {
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState);
  const { logUp } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('state', state);
    const res = await logUp(state, `${process.env.REACT_APP_BASEURL}/api/v1/auth/login`, '/login');
    console.log('res login', res);
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
