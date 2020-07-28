import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth/AuthContext';
import { useHistory } from 'react-router-dom';

export const SignupForm = () => {
  const initialState = {
    firstName: '',
    lastName: '',
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
    logUp(state, `${process.env.REACT_APP_BASEURL}/api/v1/auth/signup`)
      .then((res) => {
        setState({ ...state, loading: false });
        history.push('/dashboard');
      })
      .catch((err) => {
        const warning = err.split(' ')[0] === 'password' ? 'password must be atleast 8 characters with a number, a capital letter and a special character' : err;
        setState({ ...state, error: warning, loading: false });
      });
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
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={(e) => setState({ ...state, password: e.target.value })}
      />
      <input className="submit" disabled={state.loading} type="submit" value={state.loading ? 'Sending...' : 'Create'} button="true" />
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
