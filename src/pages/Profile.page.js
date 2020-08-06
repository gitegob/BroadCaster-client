import React, { useEffect, useContext, lazy,Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/auth/AuthContext';
/* eslint-disable react-hooks/exhaustive-deps */
import { UserPanel } from '../components/UserPanel';
import { Layout } from '../components/Layout';
import { pusher } from '../lib/utils';
import { Loader } from '../components/Loader';
const Profile = lazy(()=>import('../components/Profile'));
const Records = lazy(()=>import('../components/Records'));


export default ({ match }) => {
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
        <Suspense fallback={<Loader/>}>
        <div className="user-profile">
          <Profile userData={userData} />
        </div>
        <Records personal userId={match.params.id} />
       </Suspense>
      </div>
    </Layout>
  );
};
