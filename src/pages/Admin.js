import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import image2 from '../images/kevin.jpg';

export const Admin = () => {
  useEffect(() => {
    document.title = 'Admin - BroadCaster';
  }, []);
  return (
    <div className="pages admin-page">
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
              <Link to="/admin">
                <li className="nav-link active">Admin</li>
              </Link>
              <Link to="/login">
                <li className="nav-link">Log Out</li>
              </Link>
            </ul>
          </nav>
          <div className="leftside">
            <div className="user-wrapper">
              <div className="user-pic">
                <img src={image1} alt="user pic" />
              </div>
              <div className="user-info">
                <div className="user-name">
                  <a href="#">Brian Gitego</a>
                </div>
                <div className="user-username">
                  <a href="#">@gbrian__</a>
                </div>
                <div className="user-phone">+250 785 721 391</div>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <ul className="status-links">
              <li className="status-link active">
                <a href="#" className="all">
                  ALL RECORDS (20)
                </a>
              </li>
              <li className="status-link">
                <a href="#" className="resolved">
                  RESOLVED (9)
                </a>
              </li>
              <li className="status-link">
                <a href="#" className="pending">
                  pending (9)
                </a>
              </li>
              <li className="status-link">
                <a href="#" className="rejected">
                  REJECTED (2)
                </a>
              </li>
            </ul>
          </div>
          <div className="middle">
            <div className="tab">
              <ul className="tab-links">
                <li className="tab-link active">
                  <a href="#" className="all">
                    All Records
                  </a>
                </li>
                <li className="tab-link">
                  <a href="#" className="red-flag">
                    Red-Flag
                  </a>
                </li>
                <li className="tab-link">
                  <a href="#" className="intervention">
                    Intervention
                  </a>
                </li>
              </ul>
            </div>
            <div className="records-wrapper">
              <div className="search-panel">
                <input type="text" placeholder="Look for a record..." />{' '}
                <button type="submit" className="search-btn" button="true">
                  <i className="material-icons">search</i>
                </button>
              </div>

              <div className="record">
                <div className="record-info">
                  <div className="author-info">
                    <div>
                      <img src={image2} alt="author pic" className="author-pic" />
                    </div>
                    <span className="author-name">
                      <a href="#">Ben Gisa</a>
                    </span>
                  </div>
                  <div className="date">April 20 2019</div>
                </div>
                <div className="type red">Red-Flag</div>
                <div className="title">
                  <a href="#">Corruption somewhere</a>
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
                  eos quaerat modi quis quam est.
                </div>
                <a href="#" className="read-more" button="true">
                  Read more
                </a>

                <div className="status-panel">
                  <div></div>
                  <select name="status" className="status" defaultValue="pending">
                    <option value="pending">PENDING</option>
                    <option value="resolved">RESOLVED</option>
                    <option value="rejected">REJECTED</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="pagination">
              <div className="page active" id="page1">
                <a href="#">1</a>
              </div>
              <div className="page" id="page2">
                <a href="#">2</a>
              </div>
              <div className="page" id="page3">
                <a href="#">3</a>
              </div>
              <p className="page next" id="page4">
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
