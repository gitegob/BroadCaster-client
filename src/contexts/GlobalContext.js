import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();
const setPageTitle = (title) => {
  document.title = title;
};

export const GlobalProvider = ({ children }) => {
  const [tabLinks, setTabLinks] = useState([
    { id: 1, name: 'All Records', isActive: true },
    { id: 2, name: 'Red-Flag', isActive: false },
    { id: 3, name: 'Intervention', isActive: false },
  ]);
  const [statusLinks, setStatusLinks] = useState([
    {
      id: 1, name: 'Records', number: 20, isActive: true,
    },
    {
      id: 2, name: 'Resolved', number: 9, isActive: false,
    },
    {
      id: 3, name: 'pending', number: 9, isActive: false,
    },
    {
      id: 4, name: 'Rejected', number: 2, isActive: false,
    },
  ]);
  const tabStatClick = (link, links, setLinks) => {
    const newArr = links.map((el) => {
      const result = el;
      result.isActive = false;
      return result;
    });
    newArr[newArr.indexOf(link)].isActive = true;
    setLinks(newArr);
  };
  const handleTabClick = (tabLink) => {
    tabStatClick(tabLink, tabLinks, setTabLinks);
  };
  const handleStatusClick = (statusLink) => {
    tabStatClick(statusLink, statusLinks, setStatusLinks);
  };
  return (
    <GlobalContext.Provider
      value={{
        tabLinks, statusLinks, setPageTitle, handleTabClick, handleStatusClick,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
