import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { Record } from './Record';
import { AuthContext } from '../contexts/auth/AuthContext';

export const Records = () => {
  const { records, getRecords } = useContext(RecordsContext);
  const { token } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const tkn = token || localStorage.getItem('accessToken');
      if (!tkn) history.push('/login');
      else {
        await getRecords(tkn);
      }
    })();
  }, []);
  return <div className="records-wrapper">{records.map((rec) => <Record key={rec.id} record={rec} />)}</div>;
};
