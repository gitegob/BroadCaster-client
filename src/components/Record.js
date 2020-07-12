/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StatusChanger } from './StatusChanger';
import { AuthContext } from '../contexts/auth/AuthContext';
import { RecordsContext } from '../contexts/records/RecordsContext';

import image1 from '../images/brian side sq.jpg';

export const Record = ({ record }) => {
  const { userData, token } = useContext(AuthContext);
  const { deleteRecord } = useContext(RecordsContext);
  const history = useHistory();
  const handleRecordClick = () => {
    history.push(`/records/${record.id}/view`);
  };
  const handleDelete = () => {
    const tkn = token || localStorage.getItem('accessToken');
    if (tkn) deleteRecord(record.id, tkn);
  };
  return (
    <div className="record">
      <div className="record-info">
        <div className="author-info">
          <div>
            <img src={image1} alt="author pic" className="author-pic" />
          </div>
          <span className="author-name">
            <Link to="/dashboard">{record.authorName}</Link>
          </span>
        </div>
        <div className="date">{record.createdOn}</div>
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
          <Link to={`/records/${record.id}/edit`} className="edit" button="true">
            <i className="material-icons">edit</i>
            {' '}
          </Link>
          {' '}
          <Link to="#" className="delete" button="true" onClick={handleDelete}>
            <i className="material-icons">delete</i>
            {' '}
          </Link>
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
