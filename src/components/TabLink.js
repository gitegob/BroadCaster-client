import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';

export const TabLink = ({ tabLink }) => {
  const { handleTabClick } = useContext(GlobalContext);
  const handleClick = () => handleTabClick(tabLink);
  return (
    <li className={tabLink.isActive ? 'tab-link active' : 'tab-link'} onClick={handleClick}>
      <Link to="#">{tabLink.name}</Link>
    </li>
  );
};
