import React, { useReducer } from 'react';
import { createContext } from 'react';
import { AuthReducer } from './AuthReducer';

const initialState = {
  token: '',
  userData: {},
  loading: true,
};
export const AuthContext = createContext(initialState);
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const signIn = async (body, path) => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    try {
      const response = await (await fetch(path, config)).json();
      if (response.status === 200) return response;
      else throw response.error;
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: 'Server Error, try again',
      });
      return null;
    }
  };
  const getUserData = async (token) => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ secret: process.env.REACT_APP_SECRET }),
    };
    try {
      const res = await (
        await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/secret123`, config)
      ).json();
      if (res.status === 200) {
        dispatch({
          type: 'GET_USER_DATA',
          payload: res.data.userData,
        });
      } else throw res.error;
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: 'Server Error, try again',
      });
    }
  };
  const logIn = async (body, path) => {
    const response = await signIn(body, path);
    if (response) {
      localStorage.setItem('userToken', response.data.token);
      dispatch({
        type: 'LOGIN',
        payload: response.data.token,
      });
    }
  };
  return (
    <AuthContext.Provider value={{ ...state, logIn, getUserData }}>{children}</AuthContext.Provider>
  );
};
