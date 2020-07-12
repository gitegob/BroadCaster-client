import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { Record } from './Record';
import { AuthContext } from '../contexts/auth/AuthContext';

export const Records = () => {
  const { records } = useContext(RecordsContext);
  const { token } = useContext(AuthContext);
  const { getRecords } = useContext(RecordsContext);
  const history = useHistory();

  useEffect(() => {
    const tkn = token || localStorage.getItem('accessToken');
    if (!tkn) history.push('/login');
    else {
      getRecords(tkn);
    }
  }, []);
  return <div className="records-wrapper">{records.map((rec) => <Record key={rec.id} record={rec} />)}</div>;
};
