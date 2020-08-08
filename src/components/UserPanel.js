/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useContext,
} from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import Profile from './Profile';
import { ProfileUpdate } from './ProfileUpdate';
import { ResetPassword } from './ResetPassword';

export const UserPanel = () => {
  const {
    editors, setEditors,
  } = useContext(GlobalContext);

  return (
    <div className="user-panel">
      {editors.profEditor && (
      <>
        <ProfileUpdate />
        <button
          type="button"
          onClick={() => setEditors({
            ...editors, profEditor: false, prof: true, resetEditor: false,
          })}
          className="cancel-profile-btn"
          button="true"
        >
          Cancel
        </button>
      </>
      )}
      {editors.prof && (
      <>
        <Profile />
        <button
          type="button"
          onClick={() => setEditors({
            ...editors, profEditor: true, prof: false, resetEditor: false,
          })}
          className="edit-profile-btn"
          button="true"
        >
          Edit Profile
        </button>
      </>
      )}
      {editors.resetEditor && <ResetPassword />}
      {!editors.profEditor && !editors.resetEditor && (
      <button
        type="button"
        onClick={() => setEditors({
          ...editors, profEditor: false, prof: false, resetEditor: true,
        })}
        className="reset-pwd-btn"
        button="true"
      >
        Reset Password
      </button>
      )}
    </div>
  );
};
