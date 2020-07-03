import React, { useContext } from 'react';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { RecordUser, RecordAdmin } from './Record';
import { AuthContext } from '../contexts/auth/AuthContext';

export const Records = () => {
  const { records } = useContext(RecordsContext);
  const { userData } = useContext(AuthContext);
  const isAd = userData.isAdmin;
  const renderRecord = (rec) =>
    isAd ? <RecordAdmin key={rec.id} record={rec} /> : <RecordUser key={rec.id} record={rec} />;
  return <div className="records-wrapper">{records.map((rec) => renderRecord(rec))}</div>;
};
