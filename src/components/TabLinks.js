import React, { useContext } from 'react';
import { TabLink } from './TabLink';
import { GlobalContext } from '../contexts/GlobalContext';

export const TabLinks = () => {
  const { tabLinks } = useContext(GlobalContext);
  return (
    <ul className="tab-links">
      {tabLinks.map((tabLink, i) => (
        <TabLink key={i} tabLink={tabLink} />
      ))}
    </ul>
  );
};
