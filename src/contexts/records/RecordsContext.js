import React, { createContext, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { RecordsReducer } from './RecordsReducer';
import { BASEURL } from '../../lib/utils';

const initialState = {
  records: [],
  userRecords: [],
  record: {},
  error: '',
  loading: true,
};
export const RecordsContext = createContext(initialState);

export const RecordsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RecordsReducer, initialState);
  const history = useHistory();

  const getRecords = async (path, token) => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await (
        await fetch(path, config)
      ).json();
      dispatch({
        type: 'GET_RECORDS',
        payload: response.data.records,
      });
      localStorage.setItem('currentRecords', JSON.stringify(response.data.records));
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };

  const getUserRecords = async (path, token) => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await (
        await fetch(path, config)
      ).json();
      dispatch({
        type: 'GET_USER_RECORDS',
        payload: response.data.records,
      });
      localStorage.setItem('currentRecords', JSON.stringify(response.data.records));
    } catch (err) {
      console.log('err', err);
      throw err;
    }
  };
  const getARecord = async (recordId, token) => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await (
        await fetch(`${BASEURL}/api/v1/records/${recordId}`, config)
      ).json();
      dispatch({
        type: 'GET_A_RECORD',
        payload: res.data.record,
      });
    } catch (error) {
      console.log('error', error);
      throw error;
    }
  };

  const createRecord = async (body, tkn) => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tkn}`,
      },
      body: JSON.stringify(body),
    };
    try {
      const res = await (
        await fetch(`${BASEURL}/api/v1/records`, config)
      ).json();
      if (res.status === 201) {
        dispatch({
          type: 'CREATE_A_RECORD',
          payload: res.data.record,
        });
      }
      return res;
    } catch (error) {
      console.log('error', error);
    }
  };

  const updateRecord = async (body, recordId, tkn) => {
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tkn}`,
      },
      body: JSON.stringify(body),
    };
    try {
      const res = await (
        await fetch(`${BASEURL}/api/v1/records/${recordId}`, config)
      ).json();
      dispatch({
        type: 'UPDATE_A_RECORD',
        payload: res.data.record,
      });
      history.push(`/records/${recordId}/view`);
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error.message,
      });
      console.log('error', error);
    }
  };

  const deleteRecord = async (recordId, tkn) => {
    const config = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${tkn}`,
      },
    };
    const res = await (
      await fetch(`${BASEURL}/api/v1/records/${recordId}`, config)
    ).json();
    if (res.status === 200) {
      await getRecords(`${BASEURL}/api/v1/records`, tkn);
      if (history.location.pathname === '/') history.replace('/');
      else history.push('/');
    }
  };

  const updateStatus = async (recordId, status, tkn) => {
    const config = {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${tkn}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    };
    const res = await (
      await fetch(`${BASEURL}/api/v1/records/${recordId}/status`, config)
    ).json();
    if (res.status === 200) {
      await getRecords(`${BASEURL}/api/v1/records`, tkn);
      if (history.location.pathname === '/') history.replace('/');
      else history.push('/');
    }
  };

  const recordSearch = async (query, tkn) => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${tkn}`,
      },
    };
    try {
      const res = await (await fetch(`${BASEURL}/api/v1/records?search=${query}`, config)).json();
      dispatch({
        type: 'GET_RECORDS',
        payload: res.data.records,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return (
    <RecordsContext.Provider
      value={{
        ...state,
        getRecords,
        getUserRecords,
        getARecord,
        createRecord,
        deleteRecord,
        updateRecord,
        updateStatus,
        recordSearch,
      }}
    >
      {children}
    </RecordsContext.Provider>
  );
};
