import React, { useContext } from 'react';
import { StatLink } from './StatLink';
import { GlobalContext } from '../contexts/GlobalContext';

export const StatLinks = () => {
  const { statusLinks } = useContext(GlobalContext);
  return (
    <ul className="status-links">
      {statusLinks.map((link) => (
        <StatLink key={link.id} statusLink={link} />
      ))}
    </ul>
  );
};
