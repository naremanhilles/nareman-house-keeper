import React from 'react';
import './style.css';

const Button = ({ name, onClick, className }) => (
  <div>
    <button className={`button ${className}`} type="submit" onClick={onClick}>
      {name}{' '}
    </button>
  </div>
);


export default Button;
