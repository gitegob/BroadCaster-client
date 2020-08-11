import React, { useState, useContext } from 'react';
import { AuthState } from '../state/auth/AuthState';
import { RecordState } from '../state/records/RecordState';

export const StatusChanger = ({ record }) => {
  const [status, setStatus] = useState(record.status);
  const [loading, setloading] = useState(false);
  const { userData } = useContext(AuthState);
  const { updateStatus } = useContext(RecordState);
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
