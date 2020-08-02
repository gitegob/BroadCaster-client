import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { Record } from './Record';
import { logOut } from '../lib/auth';
import { pusher } from '../lib/utils';

export const Records = () => {
  const { records, getRecords } = useContext(RecordsContext);
  const history = useHistory();

  useEffect(() => {
    const tkn = localStorage.getItem('accessToken');
    if (!tkn) pusher(history, '/login');
    else {
      getRecords(`${process.env.REACT_APP_BASEURL}/api/v1/records`, tkn)
        .then((res) => null)
        .catch((error) => {
          console.log(error);
          logOut(history);
        });
    }
  }, []);
  return (
    <div className="records-wrapper">
      {records.length ? records.map((rec) => (
        <Record key={rec.id} record={rec} />
      )) : <h1 style={{ textAlign: 'center', padding: '1rem', color: '#555' }}>NO RECORDS</h1>}
    </div>
  );
};
