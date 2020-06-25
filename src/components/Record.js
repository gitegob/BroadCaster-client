import React from 'react';
import image1 from '../images/brian side sq.jpg';

export const Record = () => {
  return (
    <div className="record">
      <div className="record-info">
        <div className="author-info">
          <div className="auth-pic">
            <img src={image1} alt="author pic" className="author-pic" />
          </div>
          <span className="author-name">
            <a href="profile.html">Kevin Hart</a>
          </span>
        </div>
        <div className="date">April 20 2019</div>
      </div>
      <div className="type red">Red-Flag</div>
      <div className="title">
        <a href="view.html">Corruption somewhere</a>
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
        <a href="#" className="edit" button="true">
          <i className="material-icons">edit</i>
        </a>
        <a className="delete" button="true">
          <i className="material-icons">delete</i>
        </a>
      </div>
    </div>
  );
};
