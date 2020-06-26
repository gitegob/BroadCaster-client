import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import image2 from '../images/Cathédrale_Marie-Rheine-du-Monde_by_Thierry_Pon.jpg';
import image3 from '../images/Halifax_Sunset_by_Vlad_Drobinin.jpg';
import { GlobalContext } from '../contexts/GlobalContext';
import { UserPanel } from '../components/UserPanel';
import { Logo } from '../components/Logo';
import { RecordInfo } from '../components/RecordInfo';

export const View = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('View Record - BroadCaster');
  }, [setPageTitle]);
  return (
    <div className="pages view-page">
      <div className="whole-body">
        <div className="grid-container">
          <nav>
            <Logo />
            <ul className="nav-links">
              <Link to="/dashboard">
                <li className="nav-link">Dashboard</li>
              </Link>
              <Link to="/records/new">
                <li className="nav-link">New Record</li>
              </Link>

              <Link to="/login">
                <li className="nav-link">Log Out</li>
              </Link>
            </ul>
          </nav>
          <UserPanel />
          <div className="middle">
            <div className="records-wrapper">
              <div className="record">
                <RecordInfo />
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

                <div className="media-panel">
                  <h3 className="media-title">Media</h3>
                  <div className="image-wrapper">
                    <img src={image2} alt="" />
                  </div>
                  <div className="image-wrapper">
                    <img src={image3} alt="" />
                  </div>
                </div>
                <div className="map-panel">
                  <h3 className="location">Location</h3>
                  <div className="map">
                    <iframe
                      title="Google map location of the record"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.433028268792!2d30.102219849897878!3d-1.9813148373298821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6310387fca3%3A0xc1909c781d84b271!2sKicukiro%20Market%2C%20KK%2015%20Rd%2C%20Kigali!5e0!3m2!1sen!2srw!4v1572460287499!5m2!1sen!2srw"
                      width="600"
                      height="300"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      SameSite="secure"
                    ></iframe>
                  </div>
                </div>
                <div className="status-panel">
                  <div className="edit-delete">
                    <Link to="/records/5/edit" className="edit" button="true">
                      Edit Record
                    </Link>
                    <Link to="/records" className="delete" button="true">
                      Delete
                    </Link>
                  </div>
                  <div className="status resolved">RESOLVED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-bg">
        <div className=" delete modal">
          <center>
            <div>Delete record?</div>
            <br />
            <Link to="/dashboard" className="confirm-delete" button="true">
              Confirm
            </Link>
            <span className="close-modal">+</span>
          </center>
        </div>
      </div>
    </div>
  );
};
