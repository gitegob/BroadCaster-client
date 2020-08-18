import React, { useReducer, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthReducer } from './AuthReducer';
import {
  handleGetUserData, handleGetProfile, handleUpdateProfile, logOut,
  handleRecoverPwd, handleResetPwd, handleUpdateProfilePic,
} from '../../lib/auth';

const initialState = {
  userData: {},
  currentProfile: {},
};
export const AuthState = createContext(initialState);
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const history = useHistory();

  const getUserData = (token) => {
    if (!token) return logOut(history);
    return handleGetUserData(token)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: 'SET_USER_DATA',
            payload: res.data.userData,
          });
        } else if ([401, 403].indexOf(res.status) > -1) logOut(history);
        return res;
      }).catch((err) => err);
  };

  const getProfile = (token, userId) => {
    if (!token) return logOut(history);
    return handleGetProfile(token, userId)
      .then((res) => {
        dispatch({
          type: 'SET_PROFILE',
          payload: res.data.userData,
        });
        return res;
      }).catch((err) => err);
  };

  const updateProfile = (body, id) => {
    const tkn = localStorage.getItem('accessToken');
    if (!tkn) return logOut(history);
    return handleUpdateProfile(tkn, body, id)
      .then(async (res) => {
        await getUserData(tkn);
        return res;
      }).catch((err) => err);
  };

  const updateProfilePic = (body, id) => {
    const tkn = localStorage.getItem('accessToken');
    if (!tkn) return logOut(history);
    return handleUpdateProfilePic(tkn, body, id)
      .then(async (res) => {
        await getUserData(tkn);
        return res;
      }).catch((err) => err);
  };

  const recoverPwd = (body) => handleRecoverPwd(body).then((res) => res).catch((error) => error);

  const resetPwd = (tkn, body) => {
    if (!tkn) return logOut(history);
    return handleResetPwd(tkn, body).then((res) => res).catch((error) => error);
  };
  return (
    <AuthState.Provider
      value={{
        ...state,
        getUserData,
        updateProfile,
        updateProfilePic,
        getProfile,
        recoverPwd,
        resetPwd,
      }}
    >
      {children}
    </AuthState.Provider>
  );
};
