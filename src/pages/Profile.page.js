import React, { lazy, Suspense } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */
import { UserPanel } from '../components/UserPanel';
import { Layout } from '../components/Layout';
import { Loader } from '../components/Loader';
const ProfileTwo = lazy(() => import('../components/ProfileTwo'));
const Records = lazy(() => import('../components/Records'));


export default ({ match }) => {
  return (
    <Layout pageClass="prof-page" pageTitle="Profile - BroadCaster" authed>
      <UserPanel />
      <div className="middle">
        <Suspense fallback={<Loader />}>
          <div className="user-profile">
            <ProfileTwo userId={match.params.id} />
          </div>
          <Records personal userId={match.params.id} />
        </Suspense>
      </div>
    </Layout>
  );
};
