import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/home/home-page.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className='App'>
      <div className='contain'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
