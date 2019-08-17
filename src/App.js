import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from '../src/pages/shop/shoppage';
import Header from '../src/components/header/header';
import SignInAndSignUp from '../src/pages/signin-and-signup/signin-and-signup';

import './App.css';









function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/sign' component={SignInAndSignUp} />

      </Switch>


    </div>
  );
}

export default App;
