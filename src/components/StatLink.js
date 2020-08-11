import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../state/GlobalState';

export const StatLink = ({ statusLink }) => {
  const { handleStatusClick } = useContext(GlobalState);
  const handleClick = () => handleStatusClick(statusLink);
  return (
    <li
      className={statusLink.isActive ? 'status-link active' : 'status-link'}
      onClick={handleClick}
    >
      <Link to="#">
        {statusLink.name} ({statusLink.number})
      </Link>
    </li>
  );
};
