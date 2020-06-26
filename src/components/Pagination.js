import React from 'react';
import { Link } from 'react-router-dom';

export const Pagination = () => {
  return (
    <div className="pagination">
      <div className="page active" id="page1">
        <Link to="#">1</Link>
      </div>
      <div className="page" id="page2">
        <Link to="#">2</Link>
      </div>
      <div className="page" id="page3">
        <Link to="#">3</Link>
      </div>
      <p className="page next" id="page4">
        <Link to="#">
          <i className="fa fa-chevron-right"></i>
        </Link>
      </p>
    </div>
  );
};
