import React from 'react';
import '../Styles/NotFound.css'; // Import the CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Page Not Found</p>
      <a href="/" className="not-found-button">Go to Home</a>
    </div>
  );
};

export default NotFound;
