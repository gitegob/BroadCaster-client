import { pusher, fetcher } from './utils';

export const logUp = async (body, path) => {
  localStorage.clear();
  const res = await fetcher(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return res;
};

export const logOut = (history) => {
  localStorage.clear();
  pusher(history, '/login');
};

export const handleUpdateProfile = async (tkn, body, id) => {
  const res = await fetcher(`/auth/profile/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tkn}`,
    },
    body: JSON.stringify(body),
  });
  return res;
};

export const handleGetUserData = async (token) => {
  const res = await fetcher('/auth/userdata', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const handleGetProfile = async (token, userId) => {
  const res = await fetcher(`/auth/profile/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const handleRecoverPwd = async (body) => {
  const res = await fetcher('/auth/recoverpwd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return res;
};

export const handleResetPwd = async (tkn, body) => {
  const res = await fetcher('/auth/resetpwd', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${tkn}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return res;
};

export const handleUpdateProfilePic = async (tkn, body, id) => {
  const res = await fetcher(`/auth/profile/${id}/dp`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${tkn}`,
    },
    body,
  });
  return res;
};
