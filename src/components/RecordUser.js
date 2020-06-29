import React from 'react';
import image1 from '../images/brian side sq.jpg';
import { Link } from 'react-router-dom';

export const RecordUser = () => {
  return (
    <div className="record">
      <div className="record-info">
        <div className="author-info">
          <div className="auth-pic">
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

      <div className="status-panel">
        <div></div>
        <div className="status resolved">RESOLVED</div>
      </div>
      <div className="quick-panel">
        <Link to="/records/5/edit" className="edit" button="true">
          <i className="material-icons">edit</i>
        </Link>
        <Link to="#" className="delete" button="true">
          <i className="material-icons">delete</i>
        </Link>
      </div>
    </div>
  );
};
