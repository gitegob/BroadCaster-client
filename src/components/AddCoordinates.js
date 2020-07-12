import React from 'react';

export const AddCoordinates = () => (
  <div className="add-location">
    <div className="locate-wrapper">
      <h4 className="locate">Where is this?</h4>
      <form className="coordinates">
        <input type="text" className="district" placeholder="District" />
        <input type="text" className="sector" placeholder="Sector" />
        <input type="text" className="cell" placeholder="Cell" />
      </form>
    </div>
  </div>
);
