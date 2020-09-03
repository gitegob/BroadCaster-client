import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RecordState } from '../state/records/RecordState';
import { pusher } from '../lib/utils';
import { ToastError } from './ToastError';

export const DeleteModal = ({
  setMod, modDisplay,
}) => {
  const { record, deleteRecord } = useContext(RecordState);
  const [error, seterror] = useState('');
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const handleDelete = async () => {
    setloading(true);
    const tkn = localStorage.getItem('accessToken');
    try {
      const res = await deleteRecord(record.id, tkn);
      if (res.status === 200) pusher(history, '/');
      else {
        seterror('Delete failed!');
      }
    } catch (err) {
      seterror('Delete failed!');
      console.log(err);
    }
    setloading(false);
  };
  return (
    <div className="modal-bg" style={{ display: modDisplay }}>
      <div className=" delete modal">
        <center>
          <div>Delete record?</div>
          <br />
          <button type="button" className="confirm-delete" button="true" onClick={handleDelete}>
            {loading ? 'Deleting...' : 'Confirm'}
          </button>
          <span
            className="close-modal"
            role="button"
            onClick={setMod}
            onKeyUp={setMod}
            tabIndex="0"
          >
            <i className="material-icons">close</i>
          </span>
        </center>
      </div>
      {error && <ToastError message={error} />}
    </div>
  );
};
