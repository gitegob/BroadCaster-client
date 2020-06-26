import React from 'react';
import { Link } from 'react-router-dom';

export const TabLinks = () => {
  return (
    <ul className="tab-links">
      <li className="tab-link active">
        <Link to="#" className="all">
          All Records
        </Link>
      </li>
      <li className="tab-link">
        <Link to="#" className="red-flag">
          Red-Flag
        </Link>
      </li>
      <li className="tab-link">
        <Link to="#" className="intervention">
          Intervention
        </Link>
      </li>
    </ul>
  );
};
