import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';

export const Edit = () => {
  useEffect(() => {
    document.title = 'Edit Record - BroadCaster';
  }, []);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deleniti nulla dolores tempora temporibus reprehenderit eos voluptas similique aliquam culpa eveniet hic ipsa, voluptate assumenda labore laudantium aut et doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit autem voluptatum architecto a voluptate nostrum dicta quaerat eius molestias fuga adipisci consequuntur nobis aperiam, in aliquam totam nemo quo perspiciatis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem error placeat quae quibusdam excepturi! Incidunt ratione similique a? Quae soluta cupiditate temporibus quaerat voluptates illum exercitationem explicabo dolorum qui quas.',
  );
  return (
    <div className="page new-page view-page">
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
                <input
                  type="text"
                  className="record-title-edit"
                  placeholder="What is the issue?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  name="record-comment"
                  className="record-comment-edit"
                  rows="15"
                  placeholder="Elaborate..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </article>
              <div className="add-location">
                <h3>Edit location</h3>
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
              <div className="post-panel">
                <a href="#" className="cancel" button="true">
                  Back to Record
                </a>
                <a href="#" className="post" button="true">
                  Done
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
