/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';
import { StatusChanger } from './StatusChanger';
import { AuthContext } from '../contexts/auth/AuthContext';
import { RecordsContext } from '../contexts/records/RecordsContext';
import { userPic } from './assets/assets';
import { pusher } from '../lib/utils';

export const Record = ({ record }) => {
  const [state, setstate] = useState({ loading: false, error: '' });
  const { userData, token } = useContext(AuthContext);
  const { deleteRecord } = useContext(RecordsContext);
  const history = useHistory();
  const handleRecordClick = () => {
    history.push(`/records/${record.id}/view`);
  };
  const handleDelete = () => {
    setstate({ ...state, loading: true, error: '' });
    const tkn = token || localStorage.getItem('accessToken');
    if (tkn) {
      deleteRecord(record.id, tkn).then((res) => {
        setstate({ ...state, loading: false });
        history.replace('/');
      }).catch((err) => {
        console.log('Delete Error=>', err);
        setstate({ ...state, loading: false, error: 'Failed,Try again' });
        setTimeout(() => setstate({ ...state, error: '' }), 3000);
      });
    }
  };
  const handleEdit = () => {
    localStorage.setItem('recordToEdit', JSON.stringify(record));
    history.push(`/records/${record.id}/edit`);
  };
  return (
    <div className="record">
      <div className="record-info">
        {userData.isAdmin ? (
          <div className="author-info">
            <div>
              <img src={record.authorDP || userPic} alt="author pic" className="author-pic" />
            </div>
            <span className="author-name" onClick={() => pusher(history, `/profile/${record.authorId}`)}>
              {record.authorName}
            </span>
          </div>
        ) : <div />}
        <div className="date">{moment(record.createdOn).fromNow()}</div>
      </div>
      <div className={`type ${record.type.toLowerCase()}`}>{record.type}</div>
      <div className="title" onClick={handleRecordClick}>
        <Link to="#">{record.title}</Link>
      </div>
      <div className="comment">{record.description}</div>
      {userData.isAdmin ? (
        <button to="#" className="read-more" type="button" onClick={handleRecordClick}>
          Read more
        </button>
      ) : (
        <div className="quick-panel">
          {' '}
          <Link to="#">
            <i className="material-icons edit" onClick={handleEdit}>edit</i>
            {' '}
          </Link>
          {' '}
          {state.loading ? <div>Deleting...</div> : (
            <Link to="#">
              <i className="material-icons delete" onClick={handleDelete}>delete</i>
              {' '}
            </Link>
          )}
          {' '}
        </div>
      )}

      <div className="status-panel">
        <div />
        {userData.isAdmin ? (
          <StatusChanger record={record} />
        ) : (
          <div className={`status ${record.status.toLowerCase()}`}>{record.status}</div>
        )}
      </div>
    </div>
  );
};
