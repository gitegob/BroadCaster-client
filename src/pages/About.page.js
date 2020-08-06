import React, { useState } from 'react';
import image1 from '../images/brian side sq.jpg';
import { Layout } from '../components/Layout';
import { sendFeedback } from '../lib/utils';

export default () => {
  const [displayed, setDisplayed] = useState(false);
  const [state, setstate] = useState({ name: '', email: '', feedback: '' });
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState('');
  const [success, setsuccess] = useState('');

  const contactFormDisplay = () => {
    setstate({
      ...state, name: '', email: '', feedback: '',
    });
    setDisplayed(!displayed);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror('');
    setsuccess('');
    setloading(true);
    try {
      const res = await sendFeedback(state);
      seterror('');
      setloading(false);
      setsuccess(res.message);
      setTimeout(() => setsuccess(''), 2000);
    } catch (err) {
      setsuccess('');
      setloading(false);
      seterror(err);
    }
    contactFormDisplay();
  };
  return (
    <Layout pageClass="pages about-page" pageTitle="About - BroadCaster">
      <div className="middle">
        <div className="sub-middle">
          <div className="my-info">
            <div className="user-wrapper">
              <div className="user-pic">
                <img src={image1} alt="user pic" />
              </div>
              <div className="user-info">
                <div className="my-name">Brian Gitego</div>
                <div className="my-email">
                  <a href="mailto:gitegob7@gmail.com">gitegob7@gmail.com</a>
                </div>
                <div className="my-address">Kigali, Rwanda</div>
              </div>
            </div>
          </div>
          <div className="about-me" id="about">
            <div>
              <h2 className="how-it-works">About Brian</h2>
              Brian is an aspiring software engineer in Kigali, Rwanda.
              He is passionate about programming and is eager to learn and grow
              to be a world class developer.
              <br />
              <br />
              <br />
              <h2 className="how-it-works">About BroadCaster</h2>
              &quot;Broadcaster enables any/every citizen to bring any form of corruption to the
              notice of appropriate authorities and the general public. Users can also report on
              any other things that need government intervention&quot;
              <br />
              <br />
              <h2 className="how-it-works">How it works</h2>
              Users can create Red-flag records or Intervention records.
              <br />
              Red-flag records are reports of an incident related to corruption.
              <br />
              Intervention records are reports on issues that need government
              intervention like damaged roads,burst pipes,etc.
              <br />
              Records will initially be categorized as &quot;pending&quot;.
              After careful investigation of the posted incidents users will notice
              via their dashboard or email whether their record has been resolved or rejected
            </div>
            <div className="feedback" id="contact-us">
              <div className="hear-from-u">I&apos;d love to hear from you!</div>
              <button className="contact-us-btn" type="button" button="true" onClick={contactFormDisplay}>
                Contact me
              </button>
              {error && (
              <div style={{
                margin: '1rem auto', width: 'fit-content', textAlign: 'center', color: 'whitesmoke', backgroundColor: 'crimson',
              }}
              >
                {error}
              </div>
              )}
              {success && (
              <div style={{
                margin: '1rem auto', width: 'fit-content', textAlign: 'center', color: 'whitesmoke', backgroundColor: 'green',
              }}
              >
                {success}
              </div>
              )}
              <div className="contact-us-wrapper" style={{ display: displayed ? 'block' : 'none' }}>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="name" className="feedback-email" placeholder="Your name here..." onChange={(e) => setstate({ ...state, email: e.target.value })} />
                  <input type="email" name="email" className="feedback-email" placeholder="Your email here..." onChange={(e) => setstate({ ...state, name: e.target.value })} />
                  <textarea name="feedback" className="feedback-text" rows="10" placeholder="How has your experience on BroadCaster been?" onChange={(e) => setstate({ ...state, feedback: e.target.value })} />
                  <button type="submit" disabled={loading} className="feedback-submit" button="true">
                    {loading ? 'Sending...' : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
