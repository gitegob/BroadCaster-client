import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';
import { GlobalContext } from '../contexts/GlobalContext';
import { Nav } from '../components/Nav';

export const About = () => {
  const { setPageTitle } = useContext(GlobalContext);
  const [displayed, setDisplayed] = useState(false);
  useEffect(() => setPageTitle('About - BroadCaster'), [setPageTitle]);

  const contactFormDisplay = () => {
    setDisplayed(!displayed);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    contactFormDisplay();
  };
  const navLinks = [
    { name: 'Home', to: '/', className: 'nav-link' },
    { name: 'Sign Up', to: '/signup', className: 'nav-link' },
    { name: 'Log In', to: '/login', className: 'nav-link' },
    { name: 'About', to: '/about', className: 'nav-link active' },
  ];
  return (
    <div className="pages about-page">
      <div className="whole-body">
        <div className="grid-container">
          <Nav navLinks={navLinks} />
          <div className="middle">
            <div className="sub-middle">
              <div className="my-info">
                <div className="user-wrapper">
                  <div className="user-pic">
                    <img src={image1} alt="user pic" />
                  </div>
                  <div className="user-info">
                    <div className="my-name">
                      <Link to="#">Brian Gitego</Link>
                    </div>
                    <div className="my-email">
                      <Link to="https://gmail.com">gitegob7@gmail.com</Link>
                    </div>
                    <div className="my-address">Kigali, Rwanda</div>
                  </div>
                </div>
              </div>
              <div className="about-me">
                <div>
                  <h2 className="how-it-works">About Brian</h2>
                  Brian is a 21 year old aspiring software engineer in Kigali, Rwanda. He is
                  passionate about programming and is eager to learn and grow to be a world class
                  developer.
                  <br />
                  <br />
                  <br />
                  <h2 className="how-it-works">About BroadCaster</h2>
                  "I developed this product as a project that is part of the application for the
                  Andela fellowship program in Kigali, Rwanda where i hope to learn and collaborate
                  with many different people to grow into a world-class developer and make a
                  contribution to my community."
                  <br />
                  <br />
                </div>
                <div className="feedback">
                  <div className="hear-from-u">I'd love to hear from you!</div>
                  <button className="contact-us-btn" button="true" onClick={contactFormDisplay}>
                    Contact me
                  </button>
                  <div
                    className="contact-us-wrapper"
                    style={{ display: displayed ? 'block' : 'none' }}
                  >
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        name="email"
                        className="feedback-email"
                        placeholder="Your email here..."
                      />
                      <textarea
                        name="feedback"
                        className="feedback-text"
                        rows="10"
                        placeholder="How has your experience on BroadCaster been?"
                      ></textarea>
                      <button type="submit" className="feedback-submit" button="true">
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
