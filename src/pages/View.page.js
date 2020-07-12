import React, { useEffect, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { UserPanel } from '../components/UserPanel';
import image1 from '../images/brian side sq.jpg';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { AuthContext } from '../contexts/auth/AuthContext';
import { StatusChanger } from '../components/StatusChanger';

const navLinks = [
  {
    id: 1,
    name: 'Dashboard',
    to: '/dashboard',
    className: 'nav-link',
  },
  {
    id: 2,
    name: 'Log Out',
    to: '/login',
    className: 'nav-link',
    logOut: true,
  },
];
export const View = (props) => {
  const { setPageTitle } = useContext(GlobalContext);
  const { token, userData } = useContext(AuthContext);
  const history = useHistory();
  const { getARecord, record, deleteRecord } = useContext(RecordsContext);
  const [state, setState] = useState({ modDisplay: 'none', scrollable: true, record });
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
        await getARecord(+props.match.params.recordId, tkn);
      }
    })();
  }, []);

  const handleDelete = () => {
    console.log('record', record);
    const tkn = token || localStorage.getItem('accessToken');
    if (tkn) deleteRecord(record.id, tkn);
  };
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
                  {record.title}
                </div>
                <div className="comment">{record.description}</div>
                <div className="locate-wrapper">
                  <h3 className="locate">Location</h3>
                  <div>
                    {record.district ? record.district.toUpperCase() : record.district}
                    {' '}
                    -
                    {' '}
                    {record.sector ? record.sector.toUpperCase() : record.sector}
                    {' '}
                    -
                    {' '}
                    {record.cell ? record.cell.toUpperCase() : record.cell}
                  </div>
                </div>
                <div className="status-panel">
                  <div className="edit-delete">
                    {userData.isAdmin ? (
                      null
                    ) : (
                      <Link to="/records/5/edit" className="edit" button="true">
                        <i className="material-icons">edit</i>
                      </Link>
                    )}
                    <Link to="#" className="delete" button="true" onClick={setMod}>
                      <i className="material-icons">delete</i>
                    </Link>
                  </div>
                  <StatusChanger record={record} />
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
            <button type="button" className="confirm-delete" button="true" onClick={handleDelete}>
              Confirm
            </button>
            <span
              className="close-modal"
              role="button"
              onClick={setMod}
              onKeyUp={setMod}
              tabIndex="0"
            >
              <i className="material-icons">close</i>
            </span>
          </center>
        </div>
      </div>
      <Footer />
    </div>
  );
};
