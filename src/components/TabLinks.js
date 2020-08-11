import React, { useContext } from 'react';
import { TabLink } from './TabLink';
import { GlobalState } from '../state/GlobalState';

export const TabLinks = () => {
  const { tabLinks, tabsdisabled } = useContext(GlobalState);
  return (
    <ul className="tab-links" disabled={tabsdisabled}>
      {tabLinks.map((link) => (
        <TabLink key={link.id} tabLink={link} tabdisabled={tabsdisabled} />
      ))}
    </ul>
  );
};
