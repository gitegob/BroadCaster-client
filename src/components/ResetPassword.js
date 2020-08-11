/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react';
import { GlobalState } from '../state/GlobalState';
import { AuthState } from '../state/auth/AuthState';
import { ToastError } from './ToastError';
import { ToastSuccess } from './ToastSuccess';
import { ErrorDiv } from './Signup.form';

export const ResetPassword = () => {
  const { editors, setEditors } = useContext(GlobalState);
  const { resetPwd } = useContext(AuthState);
  const [state, setstate] = useState({ oldPwd: '', newPwd: '' });
  const [outcome, setOutcome] = useState({ success: '', error: '' });
  const [loader, setloader] = useState(false);
  const [matchpwd, setmatchpwd] = useState(true);
  const [pwdvalid, setpwdvalid] = useState(false);
  const [pwdVisible, setPwdVisible] = useState({ pwd: false, confirmPwd: false });
  const { togglePwdShow } = useContext(GlobalState);
  const handleSubmit = (e) => {
    e.preventDefault();
    setloader(true);
    setOutcome({ ...outcome, success: '', error: '' });
    const tkn = localStorage.getItem('accessToken');
    resetPwd(tkn, state)
      .then((res) => {
        setloader(false);
        if (res.status === 200) {
          setOutcome({ ...outcome, error: '', success: res.message });
          setTimeout(() => {
            setOutcome({ ...outcome, error: '', success: '' });
            setEditors({
              ...editors, profEditor: false, prof: true, resetEditor: false,
            });
          }, 1000);
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
  const confirmingPwd = (e) => {
    if (e.target.value !== state.newPwd) setmatchpwd(false);
    else setmatchpwd(true);
  };
  const changePwd = (e) => {
    setstate({ ...state, newPwd: e.target.value });
    const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,128}$/.test(e.target.value);
    if (!valid) setpwdvalid(false);
    else setpwdvalid(true);
  };
  return (
    <form className="profile-edit" onSubmit={handleSubmit}>
      <div className="reset pwd-wrapper">
        <input type="password" id="old-pwd" required name="oldPwd" placeholder="Old Password" value={state.oldPwd || ''} onChange={(e) => setstate({ ...state, oldPwd: e.target.value })} />
        <span
          role="button"
          className="material-icons"
          onClick={() => {
            setPwdVisible({ ...pwdVisible, pwd: !pwdVisible.pwd });
            togglePwdShow([document.querySelector('#old-pwd')]);
          }}
        >
          {pwdVisible.pwd ? 'visibility' : 'visibility_off'}
        </span>
      </div>
      <div className="reset pwd-wrapper">
        <input type="password" id="new-pwd" required name="newPwd" placeholder="New Password" value={state.newPwd || ''} onChange={changePwd} />
        <span
          role="button"
          className="material-icons"
          onClick={() => {
            setPwdVisible({ ...pwdVisible, pwd: !pwdVisible.pwd });
            togglePwdShow([document.querySelector('#new-pwd')]);
          }}
        >
          {pwdVisible.pwd ? 'visibility' : 'visibility_off'}
        </span>
      </div>
      {!pwdvalid && <ErrorDiv message="Password must be atleat 8 characters, with atleast a capital letter and a number" />}
      <div className="reset pwd-wrapper">
        <input type="password" id="confirm-new-pwd" required name="confirmPwd" placeholder="Confirm New Password" onChange={confirmingPwd} />
        <span
          role="button"
          className="material-icons"
          onClick={() => {
            setPwdVisible({ ...pwdVisible, pwd: !pwdVisible.pwd });
            togglePwdShow([document.querySelector('#confirm-new-pwd')]);
          }}
        >
          {pwdVisible.pwd ? 'visibility' : 'visibility_off'}
        </span>
      </div>
      {!matchpwd && <ErrorDiv message="Passwords do not match" />}
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
