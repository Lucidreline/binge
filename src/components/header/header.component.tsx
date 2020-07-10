import React from 'react';

import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='logo-contain'>
        <h1 className='logo'>B</h1>
      </div>
      <div className='links-contain'>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/search'>
          Search
        </Link>
        <Link className='link' to='/login'>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Header;
