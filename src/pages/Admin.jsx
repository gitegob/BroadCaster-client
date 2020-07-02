import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import { GlobalContext } from '../contexts/GlobalContext';
import { Pagination } from '../components/Pagination';
import { TabLinks } from '../components/TabLinks';
import { Records } from '../components/Records';
import { Nav } from '../components/Nav';
import { StatLinks } from '../components/StatLinks';

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
          <div className="user-panel">
            <div className="user-wrapper">
              <div className="user-pic">
                <img src={image1} alt="user pic" />
              </div>
              <div className="user-info">
                <div className="user-name">
                  <Link to="/admin">Brian Gitego</Link>
                </div>
                <div className="user-username">
                  <Link to="/admin">@gbrian__</Link>
                </div>
                <div className="user-phone">+250 785 721 391</div>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <StatLinks isAdmin />
          </div>
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
