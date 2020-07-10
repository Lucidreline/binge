import React from 'react';

import './header.styles.scss';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='logo-contain'>
        <h1 className='logo'>B</h1>
      </div>
      <div className='links-contain'>
        <p>Home</p>
        <p>Search</p>
        <p>Log In</p>
      </div>
    </div>
  );
};

export default Header;
