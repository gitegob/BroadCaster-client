/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { UserPanel } from '../components/UserPanel';
import image1 from '../images/brian side sq.jpg';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { AuthContext } from '../contexts/auth/AuthContext';

const navLinks = [
  {
    id: 1,
    name: 'Dashboard',
    to: '/dashboard',
    className: 'nav-link',
  },
  {
    id: 2,
    name: 'New Record',
    to: '/records/new',
    className: 'nav-link',
  },
  {
    id: 3,
    name: 'Log Out',
    to: '/login',
    className: 'nav-link',
  },
];
export const View = ({ match }) => {
  const { setPageTitle } = useContext(GlobalContext);
  const { token } = useContext(AuthContext);
  const history = useHistory();
  const { getARecord, record } = useContext(RecordsContext);
  const [state, setState] = useState({ modDisplay: 'none', scrollable: true, record: record });
  useEffect(() => {
    setPageTitle('View Record - BroadCaster');
  }, [setPageTitle]);
  const setMod = () => {
    setState({
      scrollable: !state.scrollable,
      modDisplay: state.modDisplay === 'flex' ? 'none' : 'flex',
    });
    document.querySelector('.whole-body').classList.toggle('no-scroll');
  };
  useEffect(() => {
    (async () => {
      const tkn = token || localStorage.getItem('accessToken');
      if (!tkn) history.push('/login');
      else {
        await getARecord(+match.params.recordId, tkn);
      }
    })();
  }, []);
  console.log('record', record);
  return (
    <div className="pages view-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
          <UserPanel />
          <div className="middle">
            <div className="records-wrapper">
              <div className="record">
                <div className="record-info">
                  <div className="author-info">
                    <div>
                      <img src={image1} alt="author pic" className="author-pic" />
                    </div>
                    <span className="author-name">
                      <Link to="/#">{record.authorName}</Link>
                    </span>
                  </div>
                  <div className="date">{record.createdOn}</div>
                </div>
                <div className={`type ${record.type ? record.type.toLowerCase() : record.type}`}>
                  {record.type}
                </div>
                <div className="title">
                  <Link to="/#">{record.title}</Link>
                </div>
                <div className="locate-wrapper">
                  <h3 className="locate">Location</h3>
                  <div>
                    {record.location ? record.location.district.toUpperCase() : record.location} -{' '}
                    {record.location ? record.location.sector.toUpperCase() : record.location} -{' '}
                    {record.location ? record.location.cell.toUpperCase() : record.location}
                  </div>
                </div>
                <div className="comment">{record.description}</div>
                <div className="status-panel">
                  <div className="edit-delete">
                    <Link to="/records/5/edit" className="edit" button="true">
                      <i className="material-icons">edit</i>
                    </Link>
                    <Link to="#" className="delete" button="true" onClick={setMod}>
                      <i className="material-icons">delete</i>
                    </Link>
                  </div>
                  <div
                    className={`status ${
                      record.status ? record.status.toLowerCase() : record.status
                    }`}
                  >
                    {record.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-bg" style={{ display: state.modDisplay }}>
        <div className=" delete modal">
          <center>
            <div>Delete record?</div>
            <br />
            <Link to="/dashboard" className="confirm-delete" button="true">
              Confirm
            </Link>
            <span
              className="close-modal"
              role="button"
              onClick={setMod}
              onKeyUp={setMod}
              tabIndex="0"
            >
              +
            </span>
          </center>
        </div>
      </div>
      <Footer />
    </div>
  );
};
