import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { Pagination } from '../components/Pagination';
import { TabLinks } from '../components/TabLinks';
import { Records } from '../components/Records';
import { UserPanel } from '../components/UserPanel';
import { Nav } from '../components/Nav';

export const Admin = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('Admin - BroadCaster');
  }, [setPageTitle]);
  const navLinks = [
    {
      id: 1, name: 'Admin', to: '/admin', className: 'nav-link active',
    },
    {
      id: 2, name: 'Log Out', to: '/login', className: 'nav-link',
    },
  ];
  return (
    <div className="pages admin-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
          <UserPanel/>
          <div className="middle">
            <TabLinks />
            <form className="search-panel">
              <input type="text" placeholder="Look for a record..." />
              {' '}
              <button type="submit" className="search-btn" button="true">
                <i className="material-icons">search</i>
              </button>
            </form>
            <Records />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
