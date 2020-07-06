/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { RecordUser, RecordAdmin } from './Record';
import { AuthContext } from '../contexts/auth/AuthContext';
import { useHistory } from 'react-router-dom';

export const Records = () => {
  const { records } = useContext(RecordsContext);
  const { userData, token } = useContext(AuthContext);
  const { getRecords } = useContext(RecordsContext);
  const history = useHistory();

  useEffect(() => {
    const tkn = token || localStorage.getItem('accessToken');
    if (!tkn) history.push('/login');
    else {
      getRecords(tkn);
    }
  }, []);
  const isAd = userData.isAdmin;
  const renderRecord = (rec) =>
    isAd ? <RecordAdmin key={rec.id} record={rec} /> : <RecordUser key={rec.id} record={rec} />;
  return <div className="records-wrapper">{records.map((rec) => renderRecord(rec))}</div>;
};
