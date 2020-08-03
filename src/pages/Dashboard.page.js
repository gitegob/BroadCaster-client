import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Records } from '../components/Records';
import { UserPanel } from '../components/UserPanel';
import { TabLinks } from '../components/TabLinks';
import { Layout } from '../components/Layout';
import { RecordsContext } from '../contexts/records/RecordsContext';

export const Dashboard = () => {
  const [state, setstate] = useState({ query: '', loading: false });
  const { recordSearch, getRecords } = useContext(RecordsContext);

  const handleChange = (e) => {
    setstate({ ...state, query: e.target.value });
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    setstate({ ...state, loading: true });
    await recordSearch(state.query, localStorage.getItem('accessToken'));
    setstate({ ...state, loading: false });
  };
  return (
    <Layout pageClass="pages profile-page" pageTitle="Dashboard- BroadCaster" authed>
      <UserPanel />
      <div className="middle">
        <TabLinks />
        <form className="search-panel" onSubmit={handleSearch}>
          <input type="text" placeholder="Look for a record..." onFocus={(e) => { e.target.value = ''; }} onChange={handleChange} />
          {' '}
          <button type="submit" disabled={state.loading} className="search-btn" button="true">
            {state.loading ? 'Searching...' : 'Search'}
          </button>
        </form>
        <div className="new-rec-btn-wrapper">
          <div />
          <Link to="/records/new" className="new-rec-btn" button="true">
            New Record
          </Link>
        </div>
        <Records />
      </div>
    </Layout>
  );
};
