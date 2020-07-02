import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const LoginForm = () => {
  const initialState = {
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState);
  const history = useHistory();
  const { logIn } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    };
    const res = await (await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/login`, config)).json();
    if (res.status === 200) {
      logIn(state.email, res.data.token);
      history.push('/dashboard');
    }
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
// const history = useHistory();
// const { logIn } = useContext(AuthContext);
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   console.log('login!');
//   const config = {
//     method: 'POST',
//     body: JSON.stringify(state),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   const response = await (await fetch(`http://localhost:4000/api/v1/auth/login`, config)).json();
//   if (response.status === 200) {
//     const res = await (
//       await fetch(`http://localhost:4000/api/v1/auth/secret123/${state.email}`)
//     ).json();
//     logIn(res.data, response.data.token);
//     history.push('/dashboard');
//   } else history.push('/login');
// };
