import React from 'react';
import { Layout } from '../components/Layout';
import { UserPanel } from '../components/UserPanel';
import { NewRecord } from '../components/NewRecord.form';
import { emptyRecord } from '../components/assets/assets';

export default () => (
  <Layout pageClass="pages new-page" pageTitle="New Record - BroadCaster" authed>
    <UserPanel />
    <div className="middle">
      <NewRecord record={emptyRecord} />
    </div>
  </Layout>
);
