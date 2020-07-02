import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';

export const StatLink = ({ statusLink }) => {
  const { handleStatusClick } = useContext(GlobalContext);
  const handleClick = () => handleStatusClick(statusLink);
  return (
    <li
      className={statusLink.isActive ? 'status-link active' : 'status-link'}
      onClick={handleClick}
    >
      <Link to="#">
        {statusLink.name}
        {' '}
        (
        {statusLink.number}
        )
      </Link>
    </li>
  );
};
