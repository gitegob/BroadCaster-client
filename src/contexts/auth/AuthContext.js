import React, { useReducer } from 'react';
import { createContext } from 'react';
import { AuthReducer } from './AuthReducer';
import { useHistory } from 'react-router-dom';

const initialState = {
  token: '',
  userData: {},
  loading: true,
};
export const AuthContext = createContext(initialState);
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const history = useHistory();

  // const signIn = async (body, path) => {
  //   const config = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(body),
  //   };
  //   try {
  //     const response = await (await fetch(path, config)).json();
  //     if (response.status === 200) return response;
  //     else throw response.error;
  //   } catch (err) {
  //     dispatch({
  //       type: 'ERROR',
  //       payload: 'Server Error, try again',
  //     });
  //     return null;
  //   }
  // };
  // const getUserData = async (token) => {
  //   const config = {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   try {
  //     const res = await (
  //       await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/profile`, config)
  //     ).json();
  //     if (res.status === 200) {
  //       dispatch({
  //         type: 'GET_USER_DATA',
  //         payload: res.data.userData,
  //       });
  //     } else throw res.error;
  //   } catch (err) {
  //     dispatch({
  //       type: 'ERROR',
  //       payload: 'Server Error, try again',
  //     });
  //   }
  // };

  // const logIn = async (body, path) => {
  //   const response = await signIn(body, path);
  //   if (response) {
  //     localStorage.removeItem('userToken');
  //     localStorage.setItem('userToken', response.data.token);
  //     const token = localStorage.getItem('userToken');
  //     dispatch({
  //       type: 'LOGIN',
  //       payload: token,
  //     });
  //   }
  // };

  // const logOut = () => {
  // localStorage.removeItem('userToken');
  // dispatch({
  //   type: 'LOGOUT',
  // });
  //   console.log('loggedout');
  // };

  const logUp = async (body, path, endpoint) => {
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
          payload: res.data.token,
        });
        history.push('/dashboard');
      } else history.push(`${endpoint}`);
    } else history.push(`${endpoint}`);
    return res;
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
      } else console.log('res', res);
    } else console.log('res', res);
  };

  const logOut = () => {
    history.push('/login');
    localStorage.removeItem('accessToken');
    dispatch({
      type: 'LOGOUT',
    });
  };
  return (
    <AuthContext.Provider value={{ ...state, logUp, logOut, getUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
