import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Record } from '../components/Record';
import { GlobalContext } from '../contexts/GlobalContext';
import { UserPanel } from '../components/UserPanel';
import { Logo } from '../components/Logo';
import { Pagination } from '../components/Pagination';
import { TabLinks } from '../components/TabLinks';

export const Profile = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('Dashboard - BroadCaster');
  }, [setPageTitle]);
  return (
    <div className="pages profile-page">
      <div className="whole-body">
        <div className="grid-container">
          <nav>
            <Logo />
            <ul className="nav-links">
              <Link to="/dashboard">
                <li className="nav-link active">Dashboard</li>
              </Link>
              <Link to="/records/new">
                <li className="nav-link">New Record</li>
              </Link>

              <Link to="/login">
                <li className="nav-link">Log Out</li>
              </Link>
            </ul>
          </nav>
          <UserPanel />
          <div className="middle">
            <TabLinks />
            <form className="search-panel">
              <input type="text" placeholder="Look for a record..." />{' '}
              <button type="submit" className="search-btn" button>
                <i className="material-icons">search</i>
              </button>
            </form>
            <div className="records-wrapper">
              <Record />
            </div>
            <Pagination />
          </div>
        </div>
      </div>
      <div className="modal-bg">
        <div className=" delete modal">
          <center>
            <div>Delete record?</div>
            <br />
            <Link to="/dashboard" className="confirm-delete" button>
              Confirm
            </Link>
            <span className="close-modal">+</span>
          </center>
        </div>
      </div>
    </div>
  );
};
