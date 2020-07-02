import React, { useContext } from 'react';
import { TabLink } from './TabLink';
import { GlobalContext } from '../contexts/GlobalContext';

export const TabLinks = () => {
  const { tabLinks } = useContext(GlobalContext);
  return (
    <ul className="tab-links">
      {tabLinks.map((link) => (
        <TabLink key={link.id} tabLink={link} />
      ))}
    </ul>
  );
};
