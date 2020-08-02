import React from 'react';
import { Layout } from '../components/Layout';
import { UserPanel } from '../components/UserPanel';
import { EditRecord } from '../components/EditRecord.form';

export const Edit = () => {
  const recordToEdit = JSON.parse(localStorage.getItem('recordToEdit'));
  return (
    <Layout pageClass="pages new-page view-page" pageTitle="Edit Record - BroadCaster" authed>
      <UserPanel />
      <div className="middle">
        <EditRecord record={recordToEdit} />
      </div>
    </Layout>
  );
};
