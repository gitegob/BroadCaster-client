/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { userPic } from './assets/assets';
import { pusher } from '../lib/utils';
import { AuthState } from '../state/auth/AuthState';
import { ToastError } from './ToastError';
import { ToastSuccess } from './ToastSuccess';

export default () => {
  const history = useHistory();
  const { userData, getUserData, updateProfilePic } = useContext(AuthState);
  const [loader, setloader] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [outcome, setOutcome] = useState({ success: '', error: '' });
  useEffect(() => {
    (async () => {
      const tkn = localStorage.getItem('accessToken');
      await getUserData(tkn);
    })();
  }, []);
  const handleChange = () => {
    setloader(true);
    setOutcome({ ...outcome, success: '', error: '' });
    const form = document.querySelector('#dp-form');
    const formData = new FormData(form);
    updateProfilePic(formData, userData.id)
      .then((res) => {
        if (res.status === 200) {
          setOutcome({ ...outcome, success: res.message, error: '' });
          setTimeout(() => setOutcome({ ...outcome, success: '', error: '' }), 3000);
        } else {
          setOutcome({ ...outcome, success: '', error: res.error });
          setTimeout(() => setOutcome({ ...outcome, success: '', error: '' }), 3000);
        }
        setloader(false);
      })
      .catch((error) => {
        setloader(false);
        console.log(error);
      });
  };
  return (
    <>
      <div className="user-wrapper">
        <div className="user-pic">
          {!loader ? <img src={userData.dp || userPic} alt="user pic" /> : (
            <div className="lds-ellipsis">
              <div />
              <div />
              <div />
              <div />
            </div>
          )}
        </div>
        <form id="dp-form">
          <label htmlFor="dp" className="for-dp" disabled={loader} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {loader ? 'Loading...' : 'Change'}
            <input type="file" disabled={loader} id="dp" accept=".png,.jpg,.jpeg" name="dp" onChange={handleChange} />
          </label>
        </form>
        {hovered && (
          <div style={{
            textAlign: 'center', textTransform: 'uppercase', fontSize: '.8rem', color: 'red',
          }}
          >
            *Upload a square image*
          </div>
        )}
        <div className="user-info">
          <div className="user-name">
            <Link to="#" onClick={() => pusher(history, `/profile/${userData.id}`)}>
              {userData.firstName}
              {' '}
              {userData.lastName}
            </Link>
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
      {outcome.error && <ToastError message={outcome.error} />}
      {outcome.success && <ToastSuccess message={outcome.success} />}
    </>
  );
};
