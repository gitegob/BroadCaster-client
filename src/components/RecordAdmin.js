import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/brian side sq.jpg';

export const RecordAdmin = () => {
  const [color, setColor] = useState('orange');

  const handleChange = (value) => {
    switch (value) {
      case 'pending':
        setColor('orange');
        break;
      case 'resolved':
        setColor('green');
        break;
      case 'rejected':
        setColor('red');
        break;
      default:
        setColor('');
    }
  };
  return (
    <div className="record">
      <div className="record-info">
        <div className="author-info">
          <div>
            <img src={image1} alt="author pic" className="author-pic" />
          </div>
          <span className="author-name">
            <Link to="/dashboard">Kevin Hart</Link>
          </span>
        </div>
        <div className="date">April 20 2019</div>
      </div>
      <div className="type red">Red-Flag</div>
      <div className="title">
        <Link to="/records/5/view">Corruption somewhere</Link>
      </div>
      <div className="comment">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sit modi hic dolore autem,
        illum suscipit voluptas laborum praesentium architecto, accusantium ipsum quos quod
        recusandae repudiandae, quidem debitis nihil magni? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatem vel perspiciatis modi earum tenetur id atque eos. Reprehenderit
        beatae cupiditate delectus? Quidem possimus eos quo, error beatae tempore porro rem. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Labore aliquid pariatur, maxime libero
        deleniti aperiam! Cupiditate repellendus amet, ratione inventore ab, voluptate ad delectus,
        eos quaerat modi quis quam est.
      </div>
      <Link to="/records/5/view" className="read-more" button="true">
        Read more
      </Link>

      <div className="status-panel">
        <div></div>
        <select
          name="status"
          className="status"
          defaultValue="pending"
          style={{ color: color }}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="pending">PENDING</option>
          <option value="resolved">RESOLVED</option>
          <option value="rejected">REJECTED</option>
        </select>
      </div>
    </div>
  );
};
