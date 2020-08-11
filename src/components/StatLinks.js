import React, { useContext } from 'react';
import { StatLink } from './StatLink';
import { GlobalState } from '../state/GlobalState';

export const StatLinks = () => {
  const { statusLinks } = useContext(GlobalState);
  return (
    <ul className="status-links">
      {statusLinks.map((link) => (
        <StatLink key={link.id} statusLink={link} />
      ))}
    </ul>
  );
};
