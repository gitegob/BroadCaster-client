import React, { createContext, useReducer } from 'react';
import { RecordsReducer } from './RecordsReducer';
import { useHistory } from 'react-router-dom';

const initialState = {
  records: [],
  record: {},
  error: '',
  loading: true,
};
export const RecordsContext = createContext(initialState);

export const RecordsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RecordsReducer, initialState);
  const history = useHistory();
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
      localStorage.setItem('currentRecords', JSON.stringify(response.data.records));
    } catch (err) {
      dispatch({
        type: 'ERROR',
        payload: err.message,
      });
      history.push('/login');
      console.log('err', err);
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
        await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/records/${recordId}`, config)
      ).json();
      dispatch({
        type: 'GET_A_RECORD',
        payload: res.data.record,
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error.message,
      });
      history.push('/dashboard');
      console.log('error', error);
    }
    // const records = JSON.parse(localStorage.getItem('currentRecords'));
    // return records.find((rec) => rec.id === recordId);
  };
  return (
    <RecordsContext.Provider value={{ ...state, getRecords, getARecord }}>
      {children}
    </RecordsContext.Provider>
  );
};
