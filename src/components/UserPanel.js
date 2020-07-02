import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import { StatLinks } from './StatLinks';
import { AuthContext } from '../contexts/AuthContext';

export const UserPanel = () => {
  const { user } = useContext(AuthContext);
  const {
    firstName, lastName, userName, phone,
  } = user;
  return (
    <div className="user-panel">
      <div className="user-wrapper">
        <div className="user-pic">
          <img src={image1} alt="user pic" />
        </div>
        <div className="user-info">
          <div className="user-name">
            <Link to="/dashboard">
              {firstName}
              {' '}
              {lastName}
            </Link>
          </div>
          <div className="user-username">
            <Link to="/dashboard">
              @
              {userName}
            </Link>
          </div>
          <div className="user-phone">{phone}</div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <StatLinks isAdmin={false} />
    </div>
  );
};
