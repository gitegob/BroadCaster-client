import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import { GlobalContext } from '../contexts/GlobalContext';
import { AddCoordinates } from '../components/AddCoordinates';
import { Nav } from '../components/Nav';

export const Edit = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('Edit Record - BroadCaster');
  }, [setPageTitle]);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deleniti nulla dolores tempora temporibus reprehenderit eos voluptas similique aliquam culpa eveniet hic ipsa, voluptate assumenda labore laudantium aut et doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit autem voluptatum architecto a voluptate nostrum dicta quaerat eius molestias fuga adipisci consequuntur nobis aperiam, in aliquam totam nemo quo perspiciatis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem error placeat quae quibusdam excepturi! Incidunt ratione similique a? Quae soluta cupiditate temporibus quaerat voluptates illum exercitationem explicabo dolorum qui quas.',
  );
  const navLinks = [
    { name: 'Dashboard', to: '/dashboard', className: 'nav-link' },
    { name: 'New Record', to: '/records/new', className: 'nav-link' },
    { name: 'Log Out', to: '/login', className: 'nav-link' },
  ];
  return (
    <div className="page new-page view-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
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
                <AddCoordinates />
              </div>
              <div className="post-panel">
                <Link to="/records/5/view" className="cancel" button="true">
                  Cancel
                </Link>
                <Link to="/records/5/view" className="post" button="true">
                  Done
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
