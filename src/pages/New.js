import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';

export const New = () => {
  useEffect(() => {
    document.title = 'New Record - BroadCaster';
  }, []);
  return (
    <div className="pages new-page">
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
                    <a href="#">Kevin Hart</a>
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
                <div className="locate-wrapper">
                  <button className="locate" button="true">
                    Different location
                  </button>
                  <div className="coordinates">
                    <input type="text" className="latitude" placeholder="Latitude" />
                    <input type="text" className="longitude" placeholder="Longitude" />
                    <button type="submit" className="submit-coordinates">
                      Add
                    </button>
                  </div>
                </div>
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
                <a href="#" className="cancel" button="true">
                  Cancel
                </a>
                <a href="#" className="post" button="true">
                  Post
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
