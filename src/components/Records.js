import React, { useContext } from 'react';
import { RecordsContext } from '../contexts/RecordsContext';
import { AuthContext } from '../contexts/AuthContext';
import { RecordUser, RecordAdmin } from './Record';

export const Records = () => {
  const { records } = useContext(RecordsContext);
  const { user } = useContext(AuthContext);
  const { isAdmin: isAd } = user;
  const renderRecord = (rec) => (isAd ? <RecordAdmin key={rec.id} record={rec} /> : <RecordUser key={rec.id} record={rec} />);
  return <div className="records-wrapper">{records.map((rec) => renderRecord(rec))}</div>;
};
