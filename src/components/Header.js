import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <div className="header">
      <img 
        src="https://cdn.jsdelivr.net/npm/h8k-design@latest/dist/assets/favicon.ico" 
        alt="App Favicon" 
        style={{ width: '24px', height: '24px', marginRight: '8px' }} 
      />
      <span>Slideshow App</span>
    </div>
  );
};

export default Header;
