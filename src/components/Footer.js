import React from 'react';

export const Footer = () => {
  return (
    <div className="footer">
      &copy; 2019 - BroadCaster &nbsp;
      <a href="./pages/contact.html">Contact us</a>
      <span> &nbsp; </span>
      {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
      <a href="#">API</a>
    </div>
  );
};
