import React, { useEffect, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { UserPanel } from '../components/UserPanel';
import { userPic } from '../components/assets/assets';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { AuthContext } from '../contexts/auth/AuthContext';
import { StatusChanger } from '../components/StatusChanger';
import { Layout } from '../components/Layout';

export const View = (props) => {
  const { token, userData } = useContext(AuthContext);
  const history = useHistory();
  const { getARecord, record, deleteRecord } = useContext(RecordsContext);
  const [state, setState] = useState({ modDisplay: 'none', scrollable: true, record });

  const setMod = () => {
    setState({
      scrollable: !state.scrollable,
      modDisplay: state.modDisplay === 'flex' ? 'none' : 'flex',
    });
    document.querySelector('.whole-body').classList.toggle('no-scroll');
  };
  const handleDelete = () => {
    const tkn = localStorage.getItem('accessToken');
    if (tkn) deleteRecord(record.id, tkn);
  };
  useEffect(() => {
    const tkn = token || localStorage.getItem('accessToken');
    if (!tkn) history.push('/login');
    else {
      getARecord(+props.match.params.recordId, tkn)
        .then((res) => res).catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <Layout pageClass="pages view-page" pageTitle="View Record - BroadCaster" authed record={record} deleteRecord={deleteRecord}>
      <UserPanel />
      <div className="middle">
        <div className="records-wrapper">
          <div className="record">
            <div className="record-info">
              {userData.isAdmin ? (
                <div className="author-info">
                  <div>
                    <img src={userPic} alt="author pic" className="author-pic" />
                  </div>
                  <span className="author-name">
                    <Link to="/#">{record.authorName}</Link>
                  </span>
                </div>
              ) : <div />}
              <div className="date">{moment(record.createdOn).fromNow()}</div>
            </div>
            <div className={`type ${record.type ? record.type.toLowerCase() : record.type}`}>
              {record.type}
            </div>
            <div className="title">
              {record.title}
            </div>
            <div className="comment">{record.description}</div>
            <div className="locate-wrapper">
              <div className="location">
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
    </Layout>
  );
};
