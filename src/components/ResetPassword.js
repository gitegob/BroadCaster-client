import React, { useState, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { AuthContext } from '../contexts/auth/AuthContext';
import { ToastError } from './ToastError';
import { ToastSuccess } from './ToastSuccess';

export const ResetPassword = () => {
  const { editors, setEditors } = useContext(GlobalContext);
  const { resetPwd } = useContext(AuthContext);
  const [state, setstate] = useState({ oldPwd: '', newPwd: '', confirmPwd: '' });
  const [outcome, setOutcome] = useState({ success: '', error: '' });
  const [loader, setloader] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setloader(true);
    setOutcome({ ...outcome, success: '', error: '' });
    const tkn = localStorage.getItem('accessToken');
    resetPwd(tkn, { oldPwd: state.oldPwd, newPwd: state.newPwd })
      .then((res) => {
        setloader(false);
        if (res.status === 200) {
          setOutcome({ ...outcome, error: '', success: res.message });
          setTimeout(() => {
            setOutcome({ ...outcome, error: '', success: '' });
            setEditors({
              ...editors, profEditor: false, prof: true, resetEditor: false,
            });
          }, 3000);
        } else {
          setOutcome({ ...outcome, error: res.error, success: '' });
        }
      }).catch((err) => {
        setloader(false);
        setOutcome({ ...outcome, error: 'We encountered an error! Try again', success: '' });
        setTimeout(() => {
          setOutcome({ ...outcome, error: '', success: '' });
        }, 3000);
        console.log(err);
      });
  };
  return (
    <form className="profile-edit" onSubmit={handleSubmit}>
      <input type="text" name="oldPwd" placeholder="Old Password" value={state.oldPwd || ''} onChange={(e) => setstate({ ...state, oldPwd: e.target.value })} />
      <input type="text" name="newPwd" placeholder="New Password" value={state.newPwd || ''} onChange={(e) => setstate({ ...state, newPwd: e.target.value })} />
      <input type="text" name="confirmPwd" placeholder="Confirm New Password" value={state.confirmPwd || ''} onChange={(e) => setstate({ ...state, confirmPwd: e.target.value })} />
      <button type="submit" disabled={loader} className="save-reset-btn" button="true">{loader ? 'Resetting...' : 'Reset'}</button>
      <button
        type="submit"
        className="cancel-reset-btn"
        onClick={() => setEditors({
          ...editors, profEditor: false, prof: true, resetEditor: false,
        })}
        button="true"
      >
        Cancel
      </button>
      {outcome.error && <ToastError message={outcome.error} />}
      {outcome.success && <ToastSuccess message={outcome.success} />}
    </form>
  );
};
