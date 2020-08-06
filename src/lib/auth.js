import { pusher, BASEURL } from './utils';

export const logUp = (body, path) => {
  localStorage.clear();
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(path, config)
    .then((data) => data.json())
    .then((resp) => resp).catch((err) => console.log(err));
};

export const logOut = (history) => {
  localStorage.clear();
  pusher(history, '/login');
};

export const updateProf = async (tkn, body, id) => {
  const config = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${tkn}`,
    },
    body,
  };
  return fetch(`${BASEURL}/api/v1/auth/profile/${id}`, config)
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
  return fetch(`${BASEURL}/api/v1/auth/userdata`, config)
    .then((data) => data.json())
    .then((resp) => resp)
    .catch((err) => err);
};

export const getProf = (token, userId) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`${BASEURL}/api/v1/auth/profile/${userId}`, config)
    .then((data) => data.json())
    .then((resp) => resp)
    .catch((err) => err);
};

export const verifEmail = async (verificationToken) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${verificationToken}`,
    },
  };
  let res;
  try {
    res = await (await fetch(`${BASEURL}/api/v1/auth/signup/verify`, config)).json();
  } catch (error) {
    console.log(error);
  }
  return res;
};
