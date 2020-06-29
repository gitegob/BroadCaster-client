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
    { name: 'Records', number: 20, isActive: true },
    { name: 'Resolved', number: 9, isActive: false },
    { name: 'pending', number: 9, isActive: false },
    { name: 'Rejected', number: 2, isActive: false },
  ]);
  const handleTabClick = (tabLink) => {
    const newArr = tabLinks.map((el) => {
      el.isActive = false;
      return el;
    });
    newArr[newArr.indexOf(tabLink)].isActive = true;
    setTabLinks(newArr);
  };
  const handleStatusClick = (statusLink) => {
    const newArr = statusLinks.map((el) => {
      el.isActive = false;
      return el;
    });
    newArr[newArr.indexOf(statusLink)].isActive = true;
    setStatusLinks(newArr);
  };
  return (
    <GlobalContext.Provider
      value={{ tabLinks, statusLinks, setPageTitle, handleTabClick, handleStatusClick }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
