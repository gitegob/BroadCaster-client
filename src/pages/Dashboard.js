/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Records } from '../components/Records';
import { GlobalContext } from '../contexts/GlobalContext';
import { UserPanel } from '../components/UserPanel';
import { Pagination } from '../components/Pagination';
import { TabLinks } from '../components/TabLinks';
import { Footer } from '../components/Footer';
import { AuthContext } from '../contexts/auth/AuthContext';
import { RecordsContext } from '../contexts/records/RecordsContext';

export const Dashboard = () => {
  const { token, getUserData, logOut } = useContext(AuthContext);
  const { setPageTitle } = useContext(GlobalContext);
  const { getRecords } = useContext(RecordsContext);
  const history = useHistory();
  useEffect(() => {
    setPageTitle('Dashboard- BroadCaster');
  }, []);
  useEffect(() => {
    const tkn = token || localStorage.getItem('accessToken');
    if (!tkn) history.push('/login');
    else {
      getUserData(tkn);
      getRecords(tkn);
    }
  }, []);
  return (
    <div className="pages profile-page">
      <div className="whole-body">
        <div className="grid-container">
          <nav>
            <h3 className="logo">
              <Link to="/">
                <span className="broad">B</span>
                <span className="caster">roadcaster</span>
              </Link>
            </h3>
            <ul className="nav-links">
              <li className="nav-link active">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-link">
                <Link to="/records/new">New Record</Link>
              </li>
              <li className="nav-link" onClick={logOut}>
                <Link to="/#">Log Out</Link>
              </li>
            </ul>
          </nav>
          <UserPanel />
          <div className="middle">
            <TabLinks />
            <form className="search-panel">
              <input type="text" placeholder="Look for a record..." />{' '}
              <button type="submit" className="search-btn" button="true">
                <i className="material-icons">search</i>
              </button>
            </form>
            <Records />
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
      <Footer />
    </div>
  );
};
