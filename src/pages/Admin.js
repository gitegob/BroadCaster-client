import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import { GlobalContext } from '../contexts/GlobalContext';
import { Logo } from '../components/Logo';
import { Pagination } from '../components/Pagination';
import { TabLinks } from '../components/TabLinks';
import { RecordInfo } from '../components/RecordInfo';

export const Admin = () => {
  const { setPageTitle } = useContext(GlobalContext);
  useEffect(() => {
    setPageTitle('Admin - BroadCaster');
  }, [setPageTitle]);
  return (
    <div className="pages admin-page">
      <div className="whole-body">
        <div className="grid-container">
          <nav>
            <Logo />
            <ul className="nav-links">
              <Link to="/admin">
                <li className="nav-link active">Admin</li>
              </Link>
              <Link to="/login">
                <li className="nav-link">Log Out</li>
              </Link>
            </ul>
          </nav>
          <div className="user-panel">
            <div className="user-wrapper">
              <div className="user-pic">
                <img src={image1} alt="user pic" />
              </div>
              <div className="user-info">
                <div className="user-name">
                  <Link to="/admin">Brian Gitego</Link>
                </div>
                <div className="user-username">
                  <Link to="/admin">@gbrian__</Link>
                </div>
                <div className="user-phone">+250 785 721 391</div>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <ul className="status-links">
              <li className="status-link active">
                <Link to="#" className="all">
                  ALL RECORDS (20)
                </Link>
              </li>
              <li className="status-link">
                <Link to="#" className="resolved">
                  RESOLVED (9)
                </Link>
              </li>
              <li className="status-link">
                <Link to="#" className="pending">
                  pending (9)
                </Link>
              </li>
              <li className="status-link">
                <Link to="#" className="rejected">
                  REJECTED (2)
                </Link>
              </li>
            </ul>
          </div>
          <div className="middle">
            <TabLinks />
            <div className="records-wrapper">
              <div className="search-panel">
                <input type="text" placeholder="Look for a record..." />{' '}
                <button type="submit" className="search-btn" button="true">
                  <i className="material-icons">search</i>
                </button>
              </div>

              <div className="record">
                <RecordInfo />
                <div className="type red">Red-Flag</div>
                <div className="title">
                  <Link to="/records/view">Corruption somewhere</Link>
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
                <Link to="/records/view" className="read-more" button="true">
                  Read more
                </Link>

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
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
