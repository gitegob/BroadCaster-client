import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
  token: '',
  user: {},
};
export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // const log = (isAuthed, userr) => {
  //   userr.isAuthenticated = isAuthed;
  //   setUser(userr);
  // };
  const logIn = async (email, tkn) => {
    localStorage.setItem('userToken', tkn);
    const res = await (await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/secret123/${email}`)).json();
    const user = res.data;
    user.isAuth = true;
    dispatch({
      type: 'LOGIN',
      payload: user,
    });
    console.log(state);

    // const user = await (await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/secret123/${emai}`)).json().data;

    // log(true, userr);
    // localStorage.setItem('userToken', tkn);
    // setToken(tkn);
  };
  // const logOut = (userr) => {
  //   log(false, userr);
  //   localStorage.removeItem('userToken');
  //   setToken('');
  // };
  return <AuthContext.Provider value={{ logIn, user: state.user }}>{children}</AuthContext.Provider>;
};
