import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from '../src/pages/shop/shoppage';

import './App.css';









function App() {
  return (
    <div>

      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
    );
  }
  
  export default App;
