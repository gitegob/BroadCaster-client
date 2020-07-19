import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { UserPanel } from '../components/UserPanel';
import { EditRecord } from '../components/EditRecord.form';
import { RecordsContext } from '../contexts/records/RecordsContext';

export const Edit = () => {
  const { setPageTitle } = useContext(GlobalContext);
  const recordToEdit = JSON.parse(localStorage.getItem('recordToEdit'));
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
            <EditRecord record={recordToEdit} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
