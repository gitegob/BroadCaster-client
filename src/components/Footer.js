import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer">
      &copy; 2019 - BroadCaster &nbsp;
      <span> &nbsp; </span>
      <Link to="https://brian-broadcaster.herokuapp.com/">API</Link>
    </div>
  );
};
