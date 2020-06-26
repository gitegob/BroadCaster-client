import React from 'react';

export const AddCoordinates = () => {
  return (
    <div className="locate-wrapper">
      <button className="locate" button="true">
        Different location
      </button>
      <form className="coordinates">
        <input type="text" className="latitude" placeholder="Latitude" />
        <input type="text" className="longitude" placeholder="Longitude" />
        <button type="submit" className="submit-coordinates">
          Add
        </button>
      </form>
    </div>
  );
};
