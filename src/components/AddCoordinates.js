import React from 'react';

export const AddCoordinates = () => (
  <div className="locate-wrapper">
    <div className="locate">Where is this?</div>
    <form className="coordinates">
      <input type="text" className="district" placeholder="District" />
      <input type="text" className="sector" placeholder="Sector" />
      <input type="text" className="cell" placeholder="Cell" />
    </form>
  </div>
);
