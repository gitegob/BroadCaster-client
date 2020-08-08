/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { ToastError } from './ToastError';
import { ToastSuccess } from './ToastSuccess';
import { userPic } from './assets/assets';
import { AuthContext } from '../contexts/auth/AuthContext';
import { GlobalContext } from '../contexts/GlobalContext';

export const ProfileUpdate = () => {
  const { userData: user, getUserData, updateProfile } = useContext(AuthContext);
  const { editors, setEditors } = useContext(GlobalContext);
  const [loader, setloader] = useState(false);
  const [outcome, setOutcome] = useState({ success: '', error: '' });
  const [profile, setProfile] = useState(user);
  useEffect(() => {
    (async () => {
      const tkn = localStorage.getItem('accessToken');
      await getUserData(tkn);
    })();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setloader(true);
    setOutcome({ ...outcome, success: '', error: '' });
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    updateProfile(formData, user.id)
      .then((res) => {
        if (res.status === 200) {
          setOutcome({ ...outcome, success: res.message, error: '' });
          setTimeout(() => setOutcome({ ...outcome, success: '', error: '' }), 3000);
        } else {
          setOutcome({ ...outcome, success: '', error: res.error });
          setTimeout(() => setOutcome({ ...outcome, success: '', error: '' }), 3000);
        }
        setloader(false);
        setEditors({
          ...editors, prof: true, profEditor: false, resetEditor: false,
        });
      })
      .catch((error) => {
        setloader(false);
        console.log(error);
      });
  };
  return (
    <form name="form" id="myForm" className="profile-edit" onSubmit={handleSubmit}>
      <div className="user-pic"><img src={profile.dp || userPic} alt="dp" /></div>
      <input type="text" name="firstName" placeholder="firstName" value={profile.firstName || ''} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
      <input type="text" name="lastName" placeholder="lastName" value={profile.lastName || ''} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
      <fieldset style={{ backgroundColor: 'inherit' }}>
        <legend style={{ textAlign: 'center', margin: 'auto' }}>Edit Address</legend>
        <div className="address" style={{ textTransform: 'uppercase' }}>
          <div style={{
            color: '#555', fontSize: '.8rem', paddingBottom: 0, paddingTop: '1rem',
          }}
          >
            Edit District
          </div>
          <input type="text" name="district" placeholder="district" value={profile.district === 'null' ? '' : profile.district} onChange={(e) => setProfile({ ...profile, district: e.target.value })} />
          <div style={{
            color: '#555', fontSize: '.8rem', paddingBottom: 0, paddingTop: '1rem',
          }}
          >
            Edit Sector
          </div>
          <input type="text" name="sector" placeholder="sector" value={profile.sector === 'null' ? '' : profile.sector} onChange={(e) => setProfile({ ...profile, sector: e.target.value })} />
          <div style={{
            color: '#555', fontSize: '.8rem', paddingBottom: 0, paddingTop: '1rem',
          }}
          >
            Edit Cell
          </div>
          <input type="text" name="cell" placeholder="cell" value={profile.cell === 'null' ? '' : profile.cell} onChange={(e) => setProfile({ ...profile, cell: e.target.value })} />
        </div>
      </fieldset>
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 1rem',
      }}
      >
        <div><b>Allow Email Notifications</b></div>
        <input style={{ display: 'inline', flex: '10%' }} type="checkbox" name="allowEmails" id="allow-emails" checked={profile.allowEmails} onChange={(e) => setProfile({ ...profile, allowEmails: e.target.checked })} />
      </div>
      <label htmlFor="dp" className="for-dp">
        Change Profile Picture
        <input type="file" id="dp" accept=".png,.jpg,.jpeg" name="dp" onChange={(e) => setProfile({ ...profile, dp: e.target.files })} />
      </label>
      <button type="submit" disabled={loader} className="save-profile-btn" button="true">{loader ? 'Saving...' : 'Save'}</button>
      {outcome.error && <ToastError message={outcome.error} />}
      {outcome.success && <ToastSuccess message={outcome.success} />}
    </form>
  );
};
