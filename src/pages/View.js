import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../contexts/GlobalContext';
import { UserPanel } from '../components/UserPanel';
import image1 from '../images/brian side sq.jpg';
import { Nav } from '../components/Nav';

export const View = () => {
  const { setPageTitle } = useContext(GlobalContext);
  const [state, setState] = useState({ modDisplay: 'none', scrollable: true });
  useEffect(() => {
    setPageTitle('View Record - BroadCaster');
  }, [setPageTitle]);
  const setMod = () => {
    setState({
      scrollable: !state.scrollable,
      modDisplay: state.modDisplay === 'flex' ? 'none' : 'flex',
    });
    document.querySelector('.whole-body').classList.toggle('no-scroll');
  };
  const navLinks = [
    { name: 'Dashboard', to: '/dashboard', className: 'nav-link' },
    { name: 'New Record', to: '/records/new', className: 'nav-link' },
    { name: 'Log Out', to: '/login', className: 'nav-link' },
  ];
  return (
    <div className="pages view-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
          <UserPanel />
          <div className="middle">
            <div className="records-wrapper">
              <div className="record">
                <div className="record-info">
                  <div className="author-info">
                    <div>
                      <img src={image1} alt="author pic" className="author-pic" />
                    </div>
                    <span className="author-name">
                      <Link to="/dashboard">Kevin Hart</Link>
                    </span>
                  </div>
                  <div className="date">April 20 2019</div>
                </div>
                <div className="type red">Red-Flag</div>
                <div className="title">
                  <Link to="/records/5/view">Corruption somewhere</Link>
                </div>
                <div className="comment">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sit modi hic
                  dolore autem, illum suscipit voluptas laborum praesentium architecto, accusantium
                  ipsum quos quod recusandae repudiandae, quidem debitis nihil magni? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Voluptatem vel perspiciatis modi
                  earum tenetur id atque eos. Reprehenderit beatae cupiditate delectus? Quidem
                  possimus eos quo, error beatae tempore porro rem. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Labore aliquid pariatur, maxime libero deleniti
                  aperiam! Cupiditate repellendus amet, ratione inventore ab, voluptate ad delectus,
                  eos quaerat modi quis quam est. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Velit sit modi hic dolore autem, illum suscipit voluptas laborum
                  praesentium architecto, accusantium ipsum quos quod recusandae repudiandae, quidem
                  debitis nihil magni? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem vel perspiciatis modi earum tenetur id atque eos. Reprehenderit beatae
                  cupiditate delectus? Quidem possimus eos quo, error beatae tempore porro rem.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aliquid pariatur,
                  maxime libero deleniti aperiam! Cupiditate repellendus amet, ratione inventore ab,
                  voluptate ad delectus, eos quaerat modi quis quam est.
                </div>
                <div className="status-panel">
                  <div className="edit-delete">
                    <Link to="/records/5/edit" className="edit" button="true">
                      <i className="material-icons">edit</i>
                    </Link>
                    <Link to="#" className="delete" button="true" onClick={setMod}>
                      <i className="material-icons">delete</i>
                    </Link>
                  </div>
                  <div className="status resolved">RESOLVED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-bg" style={{ display: state.modDisplay }}>
        <div className=" delete modal">
          <center>
            <div>Delete record?</div>
            <br />
            <Link to="/dashboard" className="confirm-delete" button="true">
              Confirm
            </Link>
            <span className="close-modal" onClick={setMod}>
              +
            </span>
          </center>
        </div>
      </div>
    </div>
  );
};
