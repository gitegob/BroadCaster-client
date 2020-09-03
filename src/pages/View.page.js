/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { UserPanel } from '../components/UserPanel';
import { userPic } from '../components/assets/assets';
import { RecordState } from '../state/records/RecordState';
import { AuthState } from '../state/auth/AuthState';
import { StatusChanger } from '../components/StatusChanger';
import { Layout } from '../components/Layout';
import { DeleteModal } from '../components/DeleteModal';

export default (props) => {
  const { token, userData } = useContext(AuthState);
  const history = useHistory();
  const { getARecord, record, deleteRecord } = useContext(RecordState);
  const [state, setState] = useState({ modDisplay: 'none', scrollable: true, record });

  const setMod = () => {
    setState({
      scrollable: !state.scrollable,
      modDisplay: state.modDisplay === 'flex' ? 'none' : 'flex',
    });
    document.querySelector('.whole-body').classList.toggle('no-scroll');
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
                    <img src={record.authorDP || userPic} alt="author pic" className="author-pic" />
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
      <DeleteModal {...{
        setMod, modDisplay: state.modDisplay,
      }}
      />
    </Layout>
  );
};
