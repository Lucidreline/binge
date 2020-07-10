import React from 'react';
import './App.css';

import HomePage from './components/pages/home/home-page.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className='App'>
      <div className='contain'>
        <Header />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
