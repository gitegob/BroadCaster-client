import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { emptyRecord } from './assets/assets';
import { AuthContext } from '../contexts/auth/AuthContext';
import { RecordsContext } from '../contexts/records/RecordsContext';

export const EditRecord = ({ record }) => {
  const [state, setState] = useState(record || emptyRecord);
  const { token } = useContext(AuthContext);
  const { updateRecord } = useContext(RecordsContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const tkn = token || localStorage.getItem('accessToken');
    updateRecord(state, record.id, tkn);
  };

  return (
    <div className="new-record">
      <form
        className="new-record-edit"
        onSubmit={handleSubmit}
      >
        <select
          name="type"
          className="status"
          value={state.type}
          onChange={(e) => setState({ ...state, type: e.target.value })}
        >
          <option value="" disabled>Select a type</option>
          <option value="red-flag">Red-flag</option>
          <option value="intervention">Intervention</option>
        </select>

        <fieldset className="record-editor">
          <input
            type="text"
            className="record-title-edit"
            placeholder="What is the issue?"
            value={state.title}
            onChange={(e) => setState({ ...state, title: e.target.value })}
          />
          <textarea
            name="record-comment"
            className="record-comment-edit"
            rows="5"
            placeholder="Elaborate..."
            value={state.description}
            onChange={(e) => setState({ ...state, description: e.target.value })}
          />
        </fieldset>
        <fieldset className="location-editor">
          <input
            type="text"
            className="district"
            placeholder="District"
            value={state.district}
            onChange={(e) => setState({ ...state, district: e.target.value })}
          />
          <input
            type="text"
            className="sector"
            placeholder="Sector"
            value={state.sector}
            onChange={(e) => setState({ ...state, sector: e.target.value })}
          />
          <input
            type="text"
            className="cell"
            placeholder="Cell"
            value={state.cell}
            onChange={(e) => setState({ ...state, cell: e.target.value })}
          />
        </fieldset>
        <div className="post-panel">
          <Link to="/">
            <button className="cancel" type="button" button="true">Cancel</button>
          </Link>
          <button type="submit" className="post" button="true">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
