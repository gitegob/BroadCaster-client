import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth/AuthContext';
import { RecordsContext } from '../contexts/records/RecordsContext';

export const StatusChanger = ({ record }) => {
  const [status, setStatus] = useState(record.status);
  const [loading, setloading] = useState(false);
  const { userData } = useContext(AuthContext);
  const { updateStatus } = useContext(RecordsContext);
  const handleChange = async (value) => {
    setloading(true);
    const tkn = localStorage.getItem('accessToken');
    await updateStatus(record.id, value, tkn);
    setloading(false);
    setStatus(value);
  };
  if (userData.isAdmin) {
    return (
      loading ? (
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      ) : (
        <select
          name="status"
          value={status ? status.toLowerCase() : status}
          className={`status ${record.status ? record.status.toLowerCase() : record.status}`}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="pending">PENDING</option>
          <option value="resolved">RESOLVED</option>
          <option value="rejected">REJECTED</option>
        </select>
      )

    );
  } return (
    <div className={`status ${record.status ? record.status.toLowerCase() : record.status}`}>{record.status}</div>
  );
};
