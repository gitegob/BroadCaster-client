import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';

export const RecordAdmin = ({ record }) => {
  const [status, setStatus] = useState(record.status);

  const handleChange = (value) => {
    setStatus(value);
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
      <div className="type red">{record.type}</div>
      <div className="title">
        <Link to="/records/5/view">{record.title}</Link>
      </div>
      <div className="comment">{record.comment}</div>
      <Link to="/records/5/view" className="read-more" button="true">
        Read more
      </Link>

      <div className="status-panel">
        <div />
        <select
          name="status"
          value={status.toLowerCase()}
          className={`status ${status.toLowerCase()}`}
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

export const RecordUser = ({ record }) => (
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
    <div className="title">
      <Link to="/records/5/view">{record.title}</Link>
    </div>
    <div className="comment">{record.comment}</div>

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
