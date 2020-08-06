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

export const handleUpdateProfile = async (tkn, body, id) => {
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

export const handleGetUserData = async (token) => {
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

export const handleGetProfile = (token, userId) => {
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

export const handleVerifyEmail = async (verificationToken) => {
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

export const handleRecoverPwd = async (body) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  let res;
  try {
    res = await (await fetch(`${BASEURL}/api/v1/auth/recoverpwd`, config)).json();
  } catch (error) {
    console.log(error);
  }
  return res;
};

export const handleResetPwd = async (tkn, body) => {
  const config = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${tkn}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  let res;
  try {
    res = await (await fetch(`${BASEURL}/api/v1/auth/resetpwd`, config)).json();
  } catch (error) {
    console.log(error);
  }
  return res;
};
