import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Records } from '../components/Records';
import { GlobalContext } from '../contexts/GlobalContext';
import { UserPanel } from '../components/UserPanel';
import { Pagination } from '../components/Pagination';
import { TabLinks } from '../components/TabLinks';
import { RecordUser } from '../components/RecordUser';
import { Nav } from '../components/Nav';

export const Profile = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('Dashboard - BroadCaster');
  }, [setPageTitle]);
  const navLinks = [
    { name: 'Dashboard', to: '/dashboard', className: 'nav-link active' },
    { name: 'New Record', to: '/records/new', className: 'nav-link' },
    { name: 'Log Out', to: '/login', className: 'nav-link' },
  ];
  return (
    <div className="pages profile-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
          <UserPanel />
          <div className="middle">
            <TabLinks />
            <form className="search-panel">
              <input type="text" placeholder="Look for a record..." />{' '}
              <button type="submit" className="search-btn" button="true">
                <i className="material-icons">search</i>
              </button>
            </form>
            <Records prop={<RecordUser />} />
            <Pagination />
          </div>
        </div>
      </div>
      <div className="modal-bg">
        <div className=" delete modal">
          <center>
            <div>Delete record?</div>
            <br />
            <Link to="/dashboard" className="confirm-delete" button="true">
              Confirm
            </Link>
            <span className="close-modal">+</span>
          </center>
        </div>
      </div>
    </div>
  );
};
