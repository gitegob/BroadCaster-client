import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import image2 from '../images/Cathédrale_Marie-Rheine-du-Monde_by_Thierry_Pon.jpg';
import image3 from '../images/Halifax_Sunset_by_Vlad_Drobinin.jpg';

export const View = () => {
  useEffect(() => {
    document.title = 'View Record - BroadCaster';
  }, []);
  return (
    <div className="pages view-page">
      <div className="whole-body">
        <div className="grid-container">
          <nav>
            <h3 className="logo">
              <Link to="/">
                <span className="broad">B</span>
                <span className="caster">roadcaster</span>
              </Link>
            </h3>
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
          <div className="leftside">
            <div className="user-wrapper">
              <div className="user-pic">
                <img src={image1} alt="user picture" />
              </div>
              <div className="user-info">
                <div className="user-name">
                  <a href="profile.html">Kevin Hart</a>
                </div>
                <div className="user-username">
                  <a href="profile.html">@kevinhart</a>
                </div>
                <div className="user-phone">+1 553 324 556</div>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <ul className="status-links">
              <li className="status-link">20 Records</li>
              <li className="status-link">9 Resolved</li>
              <li className="status-link">9 pending</li>
              <li className="status-link">2 Rejected</li>
            </ul>
          </div>
          <div className="middle">
            <div className="records-wrapper">
              <div className="record">
                <div className="record-info">
                  <div className="author-info">
                    <div>
                      <img src={image1} alt="author pic" className="author-pic" />
                    </div>
                    <span className="author-name">
                      <a href="profile.html">Kevin Hart</a>
                    </span>
                  </div>
                  <div className="date">April 20 2019</div>
                </div>
                <div className="type red">Red-Flag</div>
                <div className="title">
                  <a href="view.html">Corruption somewhere</a>
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
                    <img src={image2} />
                  </div>
                  <div className="image-wrapper">
                    <img src={image3} />
                  </div>
                </div>
                <div className="map-panel">
                  <h3 className="location">Location</h3>
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.433028268792!2d30.102219849897878!3d-1.9813148373298821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6310387fca3%3A0xc1909c781d84b271!2sKicukiro%20Market%2C%20KK%2015%20Rd%2C%20Kigali!5e0!3m2!1sen!2srw!4v1572460287499!5m2!1sen!2srw"
                      width="600"
                      height="300"
                      frameborder="0"
                      style={{ border: 0 }}
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
                <div className="status-panel">
                  <div className="edit-delete">
                    <a href="edit.html" className="edit" button="true">
                      Edit Record
                    </a>
                    <a className="delete" button="true">
                      Delete
                    </a>
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
            <a href="profile.html" className="confirm-delete" button="true">
              Confirm
            </a>
            <span className="close-modal">+</span>
          </center>
        </div>
      </div>
    </div>
  );
};
