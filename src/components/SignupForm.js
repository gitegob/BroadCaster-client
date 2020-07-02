import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const SignupForm = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userName: '',
    phone: '',
  };
  const [state, setState] = useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('signup!');
    // const config = {
    //   method: 'POST',
    //   body: JSON.stringify(state),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };
    // const response = await (await fetch(`http://localhost:4000/api/v1/auth/signup`, config)).json();
    // if (response.status === 201) {
    //   const res = await (
    //     await fetch(`http://localhost:4000/api/v1/auth/secret123/${state.email}`)
    //   ).json();
    //   logIn(res.data, response.data.token);
    //   history.push('/dashboard');
    // } else history.push('/404');
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
      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={(e) => setState({ ...state, userName: e.target.value })}
      />
      <input
        type="tel"
        name="phone"
        placeholder="phone"
        required
        onChange={(e) => setState({ ...state, phone: e.target.value })}
      />
      <input className="submit" type="submit" value="Create" button="true" />
    </form>
  );
};
