import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Records } from '../components/Records';
import { GlobalContext } from '../contexts/GlobalContext';
import { AuthContext } from '../contexts/AuthContext';
import { UserPanel } from '../components/UserPanel';
import { Pagination } from '../components/Pagination';
import { TabLinks } from '../components/TabLinks';
import { Nav } from '../components/Nav';

export const Dashboard = () => {
  const navLinks = [
    {
      id: 1, name: 'Dashboard', to: '/dashboard', className: 'nav-link active',
    },
    {
      id: 2, name: 'New Record', to: '/records/new', className: 'nav-link',
    },
    {
      id: 3, name: 'Log Out', to: '/login', className: 'nav-link',
    },
  ];
  const { setPageTitle } = useContext(GlobalContext);
  const { user } = useContext(AuthContext);
  const { userName } = user;

  useEffect(() => {
    setPageTitle(`${userName || 'Dashboard'} - BroadCaster`);
  }, [setPageTitle, userName]);

  // useEffect(() => {
  //   const config = {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('userToken')}`,
  //     },
  //   };
  //   (async () => {
  //     const response = await (await fetch(`http://localhost:4000/api/v1/records`, config)).json();
  //     if (response.status === 200) {
  //       const { records } = response.data;
  //       updateRecords(records);
  //     }
  //   })();
  // }, []);
  // useEffect(() => {
  //   const token = localStorage.getItem('userToken');
  //   if (!token) {
  //     history.push('/login');
  //   }
  // }, [history]);

  return (
    <div className="pages profile-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
          <UserPanel />
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
