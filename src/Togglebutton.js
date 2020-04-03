import React from 'react';
import './Togglebutton.css';

export default function Togglebutton(props) {
  return (
    <div
      className={`toggle-button ${props.status.on ? 'on' : 'off'}`}
      onClick={props.handleClick}
    >
      <div
        className={`button-switch ${props.status.on ? 'right' : 'left'}`}
      ></div>
    </div>
  );
}
