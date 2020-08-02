import { pusher } from './utils';

export const logUp = async (body, path) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(path, config)
    .then((data) => data.json())
    .then((resp) => resp)
    .catch((err) => err);
};

export const logOut = (history) => {
  localStorage.clear();
  pusher(history, '/login');
};

export const updateProf = async (body, id) => {
  const tkn = localStorage.getItem('accessToken');
  const config = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${tkn}`,
    },
    body,
  };
  return fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/profile/${id}`, config)
    .then((data) => data.json())
    .then((resp) => resp)
    .catch((err) => err);
};

export const getUsrData = async (token) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/userdata`, config)
    .then((data) => data.json())
    .then((resp) => resp)
    .catch((err) => err);
};

export const getProf = async (token, userId) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`${process.env.REACT_APP_BASEURL}/api/v1/auth/profile/${userId}`, config)
    .then((data) => data.json())
    .then((resp) => resp)
    .catch((err) => err);
};
