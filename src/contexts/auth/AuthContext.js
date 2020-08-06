import React, { useReducer, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthReducer } from './AuthReducer';
import {
  getUsrData, getProf, updateProf, logOut, verifEmail,
} from '../../lib/auth';

const initialState = {
  userData: {},
  currentProfile: {},
};
export const AuthContext = createContext(initialState);
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const history = useHistory();
  const getUserData = (token) => {
    if (!token) return logOut(history);
    return getUsrData(token)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: 'SET_USER_DATA',
            payload: res.data.userData,
          });
        } else logOut(history);
      }).catch((err) => err);
  };

  const getProfile = (token, userId) => {
    if (!token) return logOut(history);
    return getProf(token, userId)
      .then((res) => dispatch({
        type: 'SET_PROFILE',
        payload: res.data.userData,
      })).catch((err) => err);
  };

  const updateProfile = (body, id) => {
    const tkn = localStorage.getItem('accessToken');
    if (!tkn) return logOut(history);
    return updateProf(tkn, body, id)
      .then((res) => {
        getUserData(tkn);
      }).catch((err) => err);
  };

  const verifyEmail = (verificationToken) => verifEmail(verificationToken)
    .then((res) => res)
    .catch((error) => error);
  return (
    <AuthContext.Provider
      value={{
        ...state,
        getUserData,
        updateProfile,
        getProfile,
        verifyEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
