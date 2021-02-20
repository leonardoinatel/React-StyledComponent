import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages';
import SigninPage from './pages/signin';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
