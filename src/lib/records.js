import { fetcher } from './utils';

export const handleGetRecords = async (path, token) => {
  const endpoint = path.split('v1')[1];
  const res = await fetcher(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const handleGetUserRecords = async (path, token) => {
  const endpoint = path.split('v1')[1];
  const res = await fetcher(endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const handleGetARecord = async (recordId, token) => {
  const res = await fetcher(`/records/${recordId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const handleCreateRecord = async (body, token) => {
  const res = await fetcher('/records', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return res;
};

export const handleUpdateRecord = async (body, token, recordId) => {
  const res = await fetcher(`/records/${recordId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return res;
};

export const handleDeleteRecord = async (recordId, token) => {
  const res = await fetcher(`/records/${recordId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const handleUpdateStatus = async (recordId, status, tkn) => {
  const res = await fetcher(`/records/${recordId}/status`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${tkn}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });
  return res;
};

export const handleRecordSearch = async (query, tkn) => {
  const res = await fetcher(`/records?search=${query}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${tkn}`,
    },
  });
  return res;
};
