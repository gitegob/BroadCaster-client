/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { userPic } from './assets/assets';
import { pusher } from '../lib/utils';
import { AuthState } from '../state/auth/AuthState';

export default ({ userId }) => {
  const history = useHistory();
  const { currentProfile: userData, getProfile } = useContext(AuthState);
  useEffect(() => {
    (async () => {
      const tkn = localStorage.getItem('accessToken');
      await getProfile(tkn, userId);
    })();
  }, []);
  return (
    <>
      <div className="user-wrapper">
        <div className="user-pic">
          <img src={userData.dp || userPic} alt="user pic" />
        </div>
        <div className="user-info">
          <div className="user-name">
            <Link to="#" onClick={() => pusher(history, `/profile/${userData.id}`)}>
              {userData.firstName}
              {' '}
              {userData.lastName}
            </Link>
          </div>
          <div>
            {userData.email}
          </div>
          <div className="address" style={{ textTransform: 'uppercase' }}>
            <div style={{ fontWeight: 'bold' }}>Address</div>
            <hr />
            <div style={{
              color: '#555', fontSize: '.8rem', paddingBottom: 0,
            }}
            >
              District
            </div>
            <div style={{ color: (!userData.district || userData.district === 'null') ? '#555' : '#222', fontWeight: 'bold' }}>
              {(!userData.district || userData.district === 'null') ? 'empty' : userData.district}
            </div>
            <div style={{
              color: '#555', fontSize: '.8rem', paddingBottom: 0,
            }}
            >
              Sector
            </div>
            <div style={{ color: (!userData.sector || userData.sector === 'null') ? '#555' : '#222', fontWeight: 'bold' }}>
              {(!userData.sector || userData.sector === 'null') ? 'empty' : userData.sector}
            </div>
            <div style={{
              color: '#555', fontSize: '.8rem', paddingBottom: 0,
            }}
            >
              Cell
            </div>
            <div style={{ color: (!userData.cell || userData.cell === 'null') ? '#555' : '#222', fontWeight: 'bold' }}>
              {(!userData.cell || userData.cell === 'null') ? 'empty' : userData.cell}
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
};
