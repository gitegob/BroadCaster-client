/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { BASEURL } from '../lib/utils';

export const TabLink = ({ tabLink, tabdisabled }) => {
  const { handleTabClick, settabsdisabled } = useContext(GlobalContext);
  const { getRecords } = useContext(RecordsContext);
  const tkn = localStorage.getItem('accessToken');
  let type;
  if (tabLink.name === 'All Records') type = 'all';
  if (tabLink.name === 'Red-Flag') type = 'red';
  if (tabLink.name === 'Intervention') type = 'int';

  const handleClick = async () => {
    if (!tabdisabled) {
      settabsdisabled(true);
      const path = type === 'all' ? `${BASEURL}/api/v1/records` : `${BASEURL}/api/v1/records?type=${type}`;
      await getRecords(path, tkn);
      handleTabClick(tabLink);
      settabsdisabled(false);
    }
  };
  return (
    <li className={tabLink.isActive ? 'tab-link active' : 'tab-link'} onClick={handleClick}>
      <Link to="#">{tabLink.name}</Link>
    </li>
  );
};
