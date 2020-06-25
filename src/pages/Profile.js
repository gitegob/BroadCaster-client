import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import { Record } from '../components/Record';

export const Profile = () => {
  useEffect(() => {
    document.title = 'Dashboard - BroadCaster';
  }, []);
  return (
    <div className="pages profile-page">
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
                <li className="nav-link active">Dashboard</li>
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
            <form className="search-panel">
              <input type="text" placeholder="Look for a record..." />{' '}
              <button type="submit" className="search-btn" button>
                <i className="material-icons">search</i>
              </button>
            </form>
            <div className="records-wrapper">
              <Record />
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
      <div className="modal-bg">
        <div className=" delete modal">
          <center>
            <div>Delete record?</div>
            <br />
            <a href="profile.html" className="confirm-delete" button>
              Confirm
            </a>
            <span className="close-modal">+</span>
          </center>
        </div>
      </div>
    </div>
  );
};
