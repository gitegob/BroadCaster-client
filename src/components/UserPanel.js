import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';

export const UserPanel = () => {
  return (
    <div className="user-panel">
      <div className="user-wrapper">
        <div className="user-pic">
          <img src={image1} alt="user pic" />
        </div>
        <div className="user-info">
          <div className="user-name">
            <Link to="/dashboard">Kevin Hart</Link>
          </div>
          <div className="user-username">
            <Link to="/dashboard">@kevinhart</Link>
          </div>
          <div className="user-phone">+1 553 324 556</div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <ul className="status-links">
        <li className="status-link">20 Records</li>
        <li className="status-link">9 Resolved</li>
        <li className="status-link">9 pending</li>
        <li className="status-link">2 Rejected</li>
      </ul>
    </div>
  );
};
