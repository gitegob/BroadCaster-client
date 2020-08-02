import React, { useReducer, createContext } from 'react';
import { AuthReducer } from './AuthReducer';
import {
  getUsrData, getProf, updateProf,
} from '../../lib/auth';

const initialState = {
  userData: {},
  currentProfile: {},
};
export const AuthContext = createContext(initialState);
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const getUserData = async (token) => getUsrData(token)
    .then((res) => dispatch({
      type: 'SET_USER_DATA',
      payload: res.data.userData,
    })).catch((err) => err);

  const getProfile = async (token, userId) => getProf(token, userId)
    .then((res) => dispatch({
      type: 'SET_PROFILE',
      payload: res.data.userData,
    })).catch((err) => err);

  const updateProfile = async (body, id) => updateProf(body, id)
    .then((res) => {
      getUserData(localStorage.getItem('accessToken'));
    }).catch((err) => err);
  return (
    <AuthContext.Provider
      value={{
        ...state,
        getUserData,
        updateProfile,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
