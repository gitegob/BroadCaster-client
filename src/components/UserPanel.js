import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import { StatLinks } from './StatLinks';
import { AuthContext } from '../contexts/auth/AuthContext';

export const UserPanel = () => {
  const { token, userData, getUserData } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    (async () => {
      const tkn = token || localStorage.getItem('accessToken');
      if (!tkn) history.push('/login');
      else {
        await getUserData(tkn);
      }
    })();
  },[]);
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
        </div>
      </div>
      <br />
      <hr />
      <br />
      <StatLinks isAdmin={userData.isAdmin} />
    </div>
  );
};
