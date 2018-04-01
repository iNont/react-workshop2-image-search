import React from 'react';
import './ImageCard.css';

export default (props) => (
  <div className="ImageCard">
    <img className="ImageCard-image" src={props.src} alt="" />
    <div className="ImageCard-desc">
      <span className="light">Author:</span> {props.author}
    </div>
  </div>
);
