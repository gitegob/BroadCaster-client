import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import { GlobalContext } from '../contexts/GlobalContext';
import { AddCoordinates } from '../components/AddCoordinates';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export const New = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('New Record - BroadCaster');
  }, [setPageTitle]);
  const navLinks = [
    {
      id: 1,
      name: 'Dashboard',
      to: '/dashboard',
      className: 'nav-link',
    },
    {
      id: 2,
      name: 'New Record',
      to: '/records/new',
      className: 'nav-link active',
    },
    {
      id: 3,
      name: 'Log Out',
      to: '/login',
      className: 'nav-link',
    },
  ];
  return (
    <div className="pages new-page">
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
                <AddCoordinates />
              </div>
              <div className="post-panel">
                <Link to="/dashboard" className="cancel" button="true">
                  Cancel
                </Link>
                <Link to="/records/5/view" className="post" button="true">
                  Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
