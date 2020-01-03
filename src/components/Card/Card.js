import React from 'react';
import './Card.css';

function Card({ text, imgPath, handler, isSelected }) {
  return (
    <div
      className="card-container"
      style={
        isSelected
          ? { backgroundColor: '#00d31c' }
          : { backgroundColor: '#fff' }
      }
      onClick={() => handler(text)}
    >
      <img alt="" src={imgPath} />
      <p>{text}</p>
    </div>
  );
}

export default Card;
