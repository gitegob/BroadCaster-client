import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { UserPanel } from '../components/UserPanel';
import { NewRecord } from '../components/NewRecord.form';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { emptyRecord } from '../components/dummy/dummy';

export const Edit = () => {
  const { setPageTitle } = useContext(GlobalContext);
  const { record } = useContext(RecordsContext);
  useEffect(() => {
    setPageTitle('Edit Record - BroadCaster');
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
    <div className="page new-page view-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
          <UserPanel />
          <div className="middle">
            <NewRecord record={record} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
