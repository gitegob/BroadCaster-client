import React, { createContext } from 'react';

export const GlobalContext = createContext();
const setPageTitle = (title) => {
  document.title = title;
};
export const GlobalProvider = ({ children }) => {
  return <GlobalContext.Provider value={{ setPageTitle }}>{children}</GlobalContext.Provider>;
};
