import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/auth/AuthContext';
import { userPic } from '../components/assets/assets';
import { UserPanel } from '../components/UserPanel';
import { Records } from '../components/Records';
import { Layout } from '../components/Layout';
import { pusher } from '../lib/utils';

export const Profile = ({ match }) => {
  const history = useHistory();
  const { currentProfile: userData, getProfile } = useContext(AuthContext);
  useEffect(() => {
    (async () => {
      const tkn = localStorage.getItem('accessToken');
      if (!tkn) pusher(history, '/login');
      else {
        await getProfile(tkn, match.params.id);
      }
    })();
  }, []);
  return (
    <Layout pageClass="prof-page" pageTitle="Profile - BroadCaster" authed>
      <UserPanel />
      <div className="middle">
        <div className="user-profile">
          <div className="user-wrapper">
            <div className="user-pic">
              <img src={userData.dp || userPic} alt="user pic" />
            </div>
            <div className="user-info">
              <div className="user-name">
                {userData.firstName}
                {' '}
                {userData.lastName}
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
        </div>
        <Records personal userId={match.params.id} />
      </div>
    </Layout>
  );
};
