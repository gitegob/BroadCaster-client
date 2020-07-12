import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { UserPanel } from '../components/UserPanel';
import { NewRecord } from '../components/NewRecord.form';
import { emptyRecord } from '../components/dummy/dummy';

export const New = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('New Record - BroadCaster');
  }, [setPageTitle]);
  const navLinks = [
    {
      id: 1,
      name: 'Dashboard',
      to: '/dashboard',
      className: 'nav-link',
    },
    {
      id: 2,
      name: 'Log Out',
      to: '/login',
      className: 'nav-link',
      logOut: true,
    },
  ];
  return (
    <div className="pages new-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
          <UserPanel />
          <div className="middle">
            <NewRecord record={emptyRecord} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
