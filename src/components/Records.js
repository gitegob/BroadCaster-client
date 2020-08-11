/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RecordState } from '../state/records/RecordState';
import { Record } from './Record';
import { logOut } from '../lib/auth';
import { pusher, BASEURL } from '../lib/utils';

export default ({ personal, userId }) => {
  const {
    records, userRecords, getRecords, getUserRecords,
  } = useContext(RecordState);
  const history = useHistory();
  const recs = personal ? userRecords : records;
  useEffect(() => {
    const getRecs = personal ? getUserRecords : getRecords;
    const path = personal ? `${BASEURL}/api/v1/records/profile/${userId}` : `${BASEURL}/api/v1/records`;
    const tkn = localStorage.getItem('accessToken');
    if (!tkn) pusher(history, '/login');
    else {
      getRecs(path, tkn)
        .then((res) => {
          if (res.status !== 200) logOut(history);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return (
    <div className="records-wrapper">
      {recs.map((rec) => (
        <Record key={rec.id} record={rec} />
      ))}
    </div>
  );
};
