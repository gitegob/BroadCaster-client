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
  const [profEditor, setprofEditor] = useState(false);
  const [tabsdisabled, settabsdisabled] = useState(false);
  const toggleProfEditor = () => {
    setprofEditor(!profEditor);
  };
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
    <GlobalContext.Provider
      value={{
        tabLinks,
        setPageTitle,
        handleTabClick,
        profEditor,
        toggleProfEditor,
        tabsdisabled,
        settabsdisabled,
        togglePwdShow,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
