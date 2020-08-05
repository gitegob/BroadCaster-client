import React, { useState, useContext, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { UserPanel } from '../components/UserPanel';
import { TabLinks } from '../components/TabLinks';
import { Layout } from '../components/Layout';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { Loader } from '../components/Loader';
const Records = lazy(()=>import('../components/Records'));

export default () => {
  const [state, setstate] = useState({ query: '', loading: false });
  const { recordSearch } = useContext(RecordsContext);

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
        <Suspense fallback={<Loader/>}>
          <Records />
        </Suspense>
      </div>
    </Layout>
  );
};
