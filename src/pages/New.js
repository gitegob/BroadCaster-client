import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import { GlobalContext } from '../contexts/GlobalContext';
import { Logo } from '../components/Logo';
import { AddCoordinates } from '../components/AddCoordinates';

export const New = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('New Record - BroadCaster');
  }, [setPageTitle]);
  return (
    <div className="pages new-page">
      <div className="whole-body">
        <div className="grid-container">
          <nav>
            <Logo />
            <ul className="nav-links">
              <Link to="/dashboard">
                <li className="nav-link">Dashboard</li>
              </Link>
              <Link to="/records/new">
                <li className="nav-link active">New Record</li>
              </Link>

              <Link to="/login">
                <li className="nav-link">Log Out</li>
              </Link>
            </ul>
          </nav>
          <div className="middle">
            <div className="new-record">
              <div className="record-info">
                <div className="author-info">
                  <div>
                    <img src={image1} alt="author pic" className="author-pic" />
                  </div>
                  <span className="author-name">
                    <Link to="/dashboard">Kevin Hart</Link>
                  </span>
                </div>
              </div>
              <article className="record-edit">
                <select name="Type" className="status">
                  <option value="red-flag">Red-flag</option>
                  <option value="intervention">Intervention</option>
                </select>
                <input type="text" className="record-title-edit" placeholder="What is the issue?" />
                <textarea
                  name="record-comment"
                  className="record-comment-edit"
                  rows="5"
                  placeholder="Elaborate..."
                />
              </article>
              <div className="add-location">
                <button className="geolocate" button="true">
                  Your location
                </button>
                <AddCoordinates />
              </div>
              <div className="add-media">
                <span>Add Images/Videos</span>
                <input
                  type="file"
                  name="images"
                  className="file-upload"
                  multiple
                  accept="video/*,image/*"
                />
              </div>
              <div className="post-panel">
                <Link to="/dashboard" className="cancel" button="true">
                  Cancel
                </Link>
                <Link to="/records/view" className="post" button="true">
                  Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
