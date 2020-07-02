import React from 'react';
import { Link } from 'react-router-dom';

export const Pagination = () => (
  <div className="pagination">
    <div className="page active" id="page1">
      <Link to="/dashboard">1</Link>
    </div>
    <div className="page" id="page2">
      <Link to="dashboard">2</Link>
    </div>
    <div className="page" id="page3">
      <Link to="dashboard">3</Link>
    </div>
    <p className="page next" id="page4">
      <Link to="dashboard">
        <i className="fa fa-chevron-right" />
      </Link>
    </p>
  </div>
);
