import React from 'react';

export const NotFound = () => {
  return (
    <div className="pages about-page">
      <div className="whole-body">
        <h1>404</h1>
        <h3>
          The page you requested for doesn't appear to be here
          <span role="img" aria-label="emoji">
            😬
          </span>
        </h3>
      </div>
    </div>
  );
};
