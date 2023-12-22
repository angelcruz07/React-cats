import React from 'react';
import { useState } from 'react';


const Card = ({ image, title, description, buttonText }) => {

  return (
    <div className="card m-1" style={{ width: 250 }}>
      <div className="card-body">
        <img src={image} className="card-img-top" alt="Imagen" style={{  width: 200, height: 200 }} />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" >{buttonText}</button>
      </div>
    </div>
  );
}

export default Card;