import React, { useContext } from 'react';
import { TabLink } from './TabLink';
import { GlobalContext } from '../contexts/GlobalContext';

export const TabLinks = () => {
  const { tabLinks, tabsdisabled } = useContext(GlobalContext);
  return (
    <ul className="tab-links" disabled={tabsdisabled}>
      {tabLinks.map((link) => (
        <TabLink key={link.id} tabLink={link} tabdisabled={tabsdisabled} />
      ))}
    </ul>
  );
};
