import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <h3 className="logo">
      <Link to="/">
        <span className="broad">B</span>
        <span className="caster">roadcaster</span>
      </Link>
    </h3>
  );
};
