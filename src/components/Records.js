import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { Record } from './Record';
import { logOut } from '../lib/auth';
import { pusher } from '../lib/utils';

export const Records = ({ personal, userId }) => {
  const {
    records, userRecords, getRecords, getUserRecords,
  } = useContext(RecordsContext);
  const history = useHistory();
  const recs = personal ? userRecords : records;
  useEffect(() => {
    const getRecs = personal ? getUserRecords : getRecords;
    const path = personal ? `${process.env.REACT_APP_BASEURL}/api/v1/records/profile/${userId}` : `${process.env.REACT_APP_BASEURL}/api/v1/records`;
    const tkn = localStorage.getItem('accessToken');
    if (!tkn) pusher(history, '/login');
    else {
      getRecs(path, tkn)
        .then((res) => null)
        .catch((error) => {
          console.log(error);
          logOut(history);
        });
    }
  }, []);
  return (
    <div className="records-wrapper">
      {recs.length ? recs.map((rec) => (
        <Record key={rec.id} record={rec} />
      )) : <h1 style={{ textAlign: 'center', padding: '1rem', color: '#555' }}>NO RECORDS</h1>}
    </div>
  );
};
