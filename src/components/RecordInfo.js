import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';

export const RecordInfo = () => {
  return (
    <div className="record-info">
      <div className="author-info">
        <div>
          <img src={image1} alt="author pic" className="author-pic" />
        </div>
        <span className="author-name">
          <Link to="/dashboard">Kevin Hart</Link>
        </span>
      </div>
      <div className="date">April 20 2019</div>
    </div>
  );
};
