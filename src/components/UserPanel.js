import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userPic } from './assets/assets';
import { AuthContext } from '../contexts/auth/AuthContext';
import { GlobalContext } from '../contexts/GlobalContext';

const Profile = ({ userData }) => {
  const history = useHistory();

  const handleClick = () => {
    if (history.location.pathname === '/') history.replace('/');
    else history.push(`/profile/${userData.id}`);
  };
  return (
    <>
      <div className="user-wrapper">
        <div className="user-pic">
          <img src={userData.dp || userPic} alt="user pic" />
        </div>
        <div className="user-info">
          <div className="user-name" role="button" onClick={handleClick}>
            {userData.firstName}
            {' '}
            {userData.lastName}
          </div>
          <div>
            {userData.email}
          </div>
          <div className="address" style={{ textTransform: 'uppercase' }}>
            <div style={{ fontWeight: 'bold' }}>Address</div>
            <hr />
            <div style={{
              color: '#555', fontSize: '.8rem', paddingBottom: 0,
            }}
            >
              District
            </div>
            <div style={{ color: (!userData.district || userData.district === 'null') ? '#555' : '#222', fontWeight: 'bold' }}>
              {(!userData.district || userData.district === 'null') ? 'empty' : userData.district}
            </div>
            <div style={{
              color: '#555', fontSize: '.8rem', paddingBottom: 0,
            }}
            >
              Sector
            </div>
            <div style={{ color: (!userData.sector || userData.sector === 'null') ? '#555' : '#222', fontWeight: 'bold' }}>
              {(!userData.sector || userData.sector === 'null') ? 'empty' : userData.sector}
            </div>
            <div style={{
              color: '#555', fontSize: '.8rem', paddingBottom: 0,
            }}
            >
              Cell
            </div>
            <div style={{ color: (!userData.cell || userData.cell === 'null') ? '#555' : '#222', fontWeight: 'bold' }}>
              {(!userData.cell || userData.cell === 'null') ? 'empty' : userData.cell}
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
};

export const ProfileUpdate = ({ user }) => {
  const [profile, setProfile] = useState(user);
  const [loaderr, setloaderr] = useState({ loading: false, error: '' });
  const { updateProfile } = useContext(AuthContext);
  const { toggleProfEditor } = useContext(GlobalContext);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setloaderr({ ...loaderr, loading: true, error: '' });
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    updateProfile(formData, user.id)
      .then((res) => {
        setloaderr({ ...loaderr, loading: false });
        toggleProfEditor();
        history.replace(window.location.pathname);
      })
      .catch((error) => {
        setloaderr({ ...loaderr, error, loading: false });
      });
  };
  return (
    <form name="form" id="myForm" className="profile-edit" onSubmit={handleSubmit}>
      <div className="user-pic"><img src={profile.dp || userPic} alt="dp" /></div>
      <input type="text" name="firstName" placeholder="firstName" value={profile.firstName || ''} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
      <input type="text" name="lastName" placeholder="lastName" value={profile.lastName || ''} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
      <input type="email" name="email" placeholder="email" value={profile.email || ''} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
      <input type="text" name="district" placeholder="district" value={profile.district === 'null' ? '' : profile.district} onChange={(e) => setProfile({ ...profile, district: e.target.value })} />
      <input type="text" name="sector" placeholder="sector" value={profile.sector === 'null' ? '' : profile.sector} onChange={(e) => setProfile({ ...profile, sector: e.target.value })} />
      <input type="text" name="cell" placeholder="cell" value={profile.cell === 'null' ? '' : profile.cell} onChange={(e) => setProfile({ ...profile, cell: e.target.value })} />
      <label htmlFor="dp" className="for-dp">
        Choose Image
        <input type="file" id="dp" accept=".png,.jpg,.jpeg" name="dp" onChange={(e) => setProfile({ ...profile, dp: e.target.files })} />
      </label>
      <button type="submit" disabled={loaderr.loading} className="save-profile-btn" button="true">{loaderr.loading ? 'Saving...' : 'Save'}</button>
      {loaderr.error && (
        <div style={{
          margin: '1rem auto', width: 'fit-content', color: 'whitesmoke', backgroundColor: 'crimson',
        }}
        >
          {loaderr.error}
        </div>
      )}
    </form>
  );
};
export const UserPanel = () => {
  const history = useHistory();
  const { profEditor, toggleProfEditor } = useContext(GlobalContext);
  const { token, userData, getUserData } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const tkn = token || localStorage.getItem('accessToken');
      if (!tkn) history.push('/login');
      else {
        await getUserData(tkn);
      }
    })();
  }, []);

  return (
    <div className="user-panel">
      {profEditor ? (<ProfileUpdate user={userData} />) : (<Profile userData={userData} />)}
      <button type="submit" onClick={toggleProfEditor} className={profEditor ? 'cancel-profile-btn' : 'edit-profile-btn'} button="true">{profEditor ? 'Cancel' : <i className="material-icons" role="button">edit</i>}</button>
    </div>
  );
};
