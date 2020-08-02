/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { RecordsContext } from '../contexts/records/RecordsContext';

export const TabLink = ({ tabLink }) => {
  const { handleTabClick } = useContext(GlobalContext);
  const { getRecords } = useContext(RecordsContext);
  const tkn = localStorage.getItem('accessToken');
  let type;
  if (tabLink.name === 'All Records') type = 'all';
  if (tabLink.name === 'Red-Flag')type = 'red';
  if (tabLink.name === 'Intervention')type = 'int';

  const handleClick = async () => {
    const path = type === 'all' ? `${process.env.REACT_APP_BASEURL}/api/v1/records` : `${process.env.REACT_APP_BASEURL}/api/v1/records?type=${type}`;
    await getRecords(path, tkn);
    handleTabClick(tabLink);
  };
  return (
    <li className={tabLink.isActive ? 'tab-link active' : 'tab-link'} onClick={handleClick}>
      <Link to="#">{tabLink.name}</Link>
    </li>
  );
};
