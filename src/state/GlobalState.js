import React, { createContext, useState } from 'react';

export const GlobalState = createContext();
const setPageTitle = (title) => {
  document.title = title;
};

export const GlobalProvider = ({ children }) => {
  const [tabLinks, setTabLinks] = useState([
    { id: 1, name: 'All Records', isActive: true },
    { id: 2, name: 'Red-Flag', isActive: false },
    { id: 3, name: 'Intervention', isActive: false },
  ]);
  const [editors, setEditors] = useState({ prof: true, profEditor: false, resetEditor: false });
  const [tabsdisabled, settabsdisabled] = useState(false);
  const [forgotPwd, setForgotPwd] = useState(false);
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
  return (
    <GlobalState.Provider
      value={{
        tabLinks,
        setPageTitle,
        handleTabClick,
        tabsdisabled,
        settabsdisabled,
        forgotPwd,
        setForgotPwd,
        editors,
        setEditors,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
