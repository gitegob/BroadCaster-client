import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';

export const RecordAdmin = ({ record }) => {
  const [status, setStatus] = useState(record.status);
  const history = useHistory();
  const handleChange = (value) => {
    setStatus(value);
  };
  const handleRecordClick = () => {
    history.push(`/records/${record.id}/view`);
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
      <Link to="#" className="read-more" button="true" onClick={handleRecordClick}>
        Read more
      </Link>

      <div className="status-panel">
        <div />
        <select
          name="status"
          value={status.toLowerCase()}
          className={`status ${record.status.toLowerCase()}`}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="pending">PENDING</option>
          <option value="resolved">RESOLVED</option>
          <option value="rejected">REJECTED</option>
        </select>
      </div>
    </div>
  );
};

export const RecordUser = ({ record }) => {
  const history = useHistory();
  const handleRecordClick = () => {
    history.push(`/records/${record.id}/view`);
  };
  return (
    <div className="record">
      <div className="record-info">
        <div className="author-info">
          <div className="auth-pic">
            <img src={image1} alt="author pic" className="author-pic" />
          </div>
          <span className="author-name">
            <Link to="/dashboard">{record.authorName}</Link>
          </span>
        </div>
        <div className="date">{record.createdOn}</div>
      </div>
      <div className="type red">{record.type}</div>
      <div className="title" onClick={handleRecordClick}>
        <Link to="#">{record.title}</Link>
      </div>
      <div className="comment">{record.description}</div>

      <div className="status-panel">
        <div />
        <div className={`status ${record.status.toLowerCase()}`}>{record.status}</div>
      </div>
      <div className="quick-panel">
        <Link to="/records/5/edit" className="edit" button="true">
          <i className="material-icons">edit</i>
        </Link>
        <Link to="/dashboard" className="delete" button="true">
          <i className="material-icons">delete</i>
        </Link>
      </div>
    </div>
  );
};
