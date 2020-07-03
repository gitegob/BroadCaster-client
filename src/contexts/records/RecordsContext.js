import React, { createContext, useReducer } from 'react';
import { RecordsReducer } from './RecordsReducer';

const initialState = {
  records: [],
  record: {},
  error: '',
  loading: true,
};
export const RecordsContext = createContext(initialState);

export const RecordsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RecordsReducer, initialState);

  const getRecords = async (token) => {
    const config = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await (
        await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/records`, config)
      ).json();
      dispatch({
        type: 'GET_RECORDS',
        payload: response.data.records,
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err.message,
      });
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
      const response = await (
        await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/records/${recordId}`, config)
      ).json();
      dispatch({
        type: 'GET_A_RECORD',
        payload: response.data.records,
      });
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err.message,
      });
    }
  };
  return (
    <RecordsContext.Provider value={{ ...state, getRecords, getARecord }}>
      {children}
    </RecordsContext.Provider>
  );
};
