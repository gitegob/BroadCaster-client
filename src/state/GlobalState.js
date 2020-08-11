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
  const togglePwdShow = (element) => {
    element.map((el) => {
      const type = el.getAttribute('type') === 'password' ? 'text' : 'password';
      el.setAttribute('type', type);
      return null;
    });
  };
  return (
    <GlobalState.Provider
      value={{
        tabLinks,
        setPageTitle,
        handleTabClick,
        tabsdisabled,
        settabsdisabled,
        togglePwdShow,
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
