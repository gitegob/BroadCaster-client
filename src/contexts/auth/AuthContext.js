import React, { useReducer, createContext } from 'react';

import { useHistory } from 'react-router-dom';
import { AuthReducer } from './AuthReducer';

const initialState = {
  userData: {},
  loading: true,
};
export const AuthContext = createContext(initialState);
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const history = useHistory();

  const logUp = async (body, path) => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    const res = await (await fetch(path, config)).json();
    if (res) {
      if (res.status === 201 || res.status === 200) {
        localStorage.setItem('accessToken', res.data.token);
        dispatch({
          type: 'LOGIN',
        });
      } else throw res.error;
    }
  };

  const getUserData = async (token) => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await (
      await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/profile`, config)
    ).json();
    if (res) {
      if (res.status === 200) {
        dispatch({
          type: 'SET_USER_DATA',
          payload: res.data.userData,
        });
      } else {
        localStorage.removeItem('accessToken');
        history.push('/login');
      }
    } else console.log('res', res);
  };

  const logOut = () => {
    history.push('/login');
    if (localStorage.getItem('accessToken')) localStorage.removeItem('accessToken');
    if (localStorage.getItem('userData')) localStorage.removeItem('userData');
    if (localStorage.getItem('recordToEdit')) localStorage.removeItem('recordToEdit');
    if (localStorage.getItem('currentRecords')) localStorage.removeItem('currentRecords');
    dispatch({
      type: 'LOGOUT',
    });
  };

  const updateProfile = async (body, id) => {
    const tkn = localStorage.getItem('accessToken');
    const config = {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${tkn}`,
      },
      body,
    };
    const res = await (await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/profile/${id}`, config)).json();
    if (res.status === 200) return res;
    throw res.error;

  };
  return (
    <AuthContext.Provider value={{
      ...state, logUp, logOut, getUserData, updateProfile,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};
