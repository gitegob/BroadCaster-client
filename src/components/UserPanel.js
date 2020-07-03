import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import { StatLinks } from './StatLinks';
import { AuthContext } from '../contexts/auth/AuthContext';

export const UserPanel = () => {
  const { userData: user } = useContext(AuthContext);
  const usr = localStorage.getItem('userData');
  console.log(usr);

  const userData = user || usr;
  return (
    <div className="user-panel">
      <div className="user-wrapper">
        <div className="user-pic">
          <img src={image1} alt="user pic" />
        </div>
        <div className="user-info">
          <div className="user-name">
            <Link to="/dashboard">
              {userData.firstName} {userData.lastName}
            </Link>
          </div>
          <div className="user-username">
            <Link to="/dashboard">@{userData.userName}</Link>
          </div>
          <div className="user-phone">{userData.phone}</div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <StatLinks isAdmin={userData.isAdmin} />
    </div>
  );
};
