// Toast.js
import React from 'react';
import '../Styles/Toast.css';

const Toast = ({ message, show }) => {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      {message}
    </div>
  );
};

export default Toast;
