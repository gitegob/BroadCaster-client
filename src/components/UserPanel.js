import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userPic } from './assets/assets';
import { AuthContext } from '../contexts/auth/AuthContext';

export const Profile = ({ userData }) => {
  const history = useHistory();

  const handleClick = () => {
    if (history.location.pathname === '/dashboard') history.replace('/dashboard');
    else history.push('/dashboard');
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

const ProfileUpdate = ({ user }) => {
  const [profile, setProfile] = useState(user);
  const [loaderr, setloaderr] = useState({ loading: false, error: '' });
  const { updateProfile } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setloaderr({ ...loaderr, loading: true, error: '' });
    const formData = new FormData();
    formData.append('firstName', profile.firstName);
    formData.append('lastName', profile.lastName);
    formData.append('email', profile.email);
    formData.append('district', profile.district);
    formData.append('sector', profile.sector);
    formData.append('cell', profile.cell);
    formData.append('dp', profile.dp);
    updateProfile(formData, user.id)
      .then((res) => {
        setloaderr({ ...loaderr, loading: false });
        window.location.reload(true);
      })
      .catch((error) => {
        setloaderr({ ...loaderr, error, loading: false });
      });
  };
  return (
    <form name="form" className="profile-edit" onSubmit={handleSubmit}>
      <div className="user-pic"><img src={profile.dp || userPic} alt="dp" /></div>
      <input type="text" placeholder="firstName" value={'' || profile.firstName || ''} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
      <input type="text" placeholder="lastName" value={profile.lastName || ''} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
      <input type="email" placeholder="email" value={profile.email || ''} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
      <input type="text" placeholder="district" value={profile.district === 'null' ? '' : profile.district} onChange={(e) => setProfile({ ...profile, district: e.target.value })} />
      <input type="text" placeholder="sector" value={profile.sector === 'null' ? '' : profile.sector} onChange={(e) => setProfile({ ...profile, sector: e.target.value })} />
      <input type="text" placeholder="cell" value={profile.cell === 'null' ? '' : profile.cell} onChange={(e) => setProfile({ ...profile, cell: e.target.value })} />
      <input type="file" onChange={(e) => setProfile({ ...profile, dp: e.target.files })} />
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
  const { token, userData, getUserData } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);

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
      {editing ? (<ProfileUpdate user={userData} />) : (<Profile userData={userData} />)}
      {editing ? <button type="submit" onClick={() => setEditing(false)} className="cancel-profile-btn" button="true">Cancel</button> : <button type="button" button="true" className="edit-profile-btn" onClick={() => setEditing(true)}><i className="material-icons" role="button">edit</i></button>}
    </div>
  );
};
