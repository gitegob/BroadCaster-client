import React, { createContext, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { RecordsReducer } from './RecordsReducer';
import { BASEURL, pusher } from '../../lib/utils';
import { logOut } from '../../lib/auth';
import {
  handleGetRecords, handleGetUserRecords, handleGetARecord, handleCreateRecord,
  handleUpdateRecord, handleDeleteRecord, handleUpdateStatus, handleRecordSearch,
} from '../../lib/records';

const initialState = {
  records: [],
  userRecords: [],
  record: {},
  error: '',
  loading: true,
};
export const RecordState = createContext(initialState);

export const RecordsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RecordsReducer, initialState);
  const history = useHistory();

  const getRecords = (path, token) => handleGetRecords(path, token)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: 'GET_RECORDS',
          payload: res.data.records,
        });
      } else if ([401, 403].indexOf(res.status) > -1) logOut(history);
      return res;
    }).catch((err) => err);

  const getUserRecords = (path, token) => handleGetUserRecords(path, token)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: 'GET_USER_RECORDS',
          payload: res.data.records,
        });
      } else if ([401, 403].indexOf(res.status) > -1) logOut(history);
      return res;
    }).catch((err) => err);

  const getARecord = (recordId, token) => handleGetARecord(recordId, token)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: 'GET_A_RECORD',
          payload: res.data.record,
        });
      } else if ([401, 403].indexOf(res.status) > -1) logOut(history);
      return res;
    }).catch((err) => err);

  const createRecord = (body, tkn) => handleCreateRecord(body, tkn)
    .then((res) => {
      if (res.status === 201) {
        dispatch({
          type: 'CREATE_A_RECORD',
          payload: res.data.record,
        });
      } else if ([401, 403].indexOf(res.status) > -1) logOut(history);
      return res;
    }).catch((err) => err);

  const updateRecord = (body, recordId, tkn) => handleUpdateRecord(body, tkn, recordId)
    .then((res) => {
      if (res.status === 201) {
        dispatch({
          type: 'UPDATE_A_RECORD',
          payload: res.data.record,
        });
      } else if ([401].indexOf(res.status) > -1) logOut(history);
      return res;
    }).catch((err) => err);

  const deleteRecord = async (recordId, tkn) => handleDeleteRecord(recordId, tkn)
    .then(async (res) => {
      if (res.status === 200) {
        await getRecords(`${BASEURL}/api/v1/records`, tkn);
        pusher(history, '/');
      } else if ([401].indexOf(res.status) > -1) logOut(history);
      return res;
    }).catch((err) => err);

  const updateStatus = async (recordId, status, tkn) => handleUpdateStatus(recordId, status, tkn)
    .then(async (res) => {
      if (res.status === 200) {
        await getRecords(`${BASEURL}/api/v1/records`, tkn);
        pusher(history, '/');
      } if ([401].indexOf(res.status) > -1) logOut(history);
      return res;
    }).catch((err) => err);

  const recordSearch = async (query, tkn) => handleRecordSearch(query, tkn)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: 'GET_RECORDS',
          payload: res.data.records,
        });
      } else if ([401, 403].indexOf(res.status) > -1) logOut(history);
      return res;
    }).catch((err) => err);
  return (
    <RecordState.Provider
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
    </RecordState.Provider>
  );
};
