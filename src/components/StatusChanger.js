import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/auth/AuthContext';

export const StatusChanger = ({ record }) => {
  const [status, setStatus] = useState(record.status);
  const { userData } = useContext(AuthContext);
  const handleChange = (value) => {
    setStatus(value);
  };
  if (userData.isAdmin) {
    return (
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
    );
  } return (
    <div className={`status ${record.status ? record.status.toLowerCase() : record.status}`}>{record.status}</div>
  );
};
