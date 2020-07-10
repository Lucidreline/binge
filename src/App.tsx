import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './components/pages/home/home-page.component';
import Header from './components/header/header.component';
import SearchPage from './components/pages/search-page/search-page.component';

function App() {
  return (
    <div className='App'>
      <div className='contain'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/search' component={SearchPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
