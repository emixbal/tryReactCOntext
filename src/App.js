import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './screens/Home.js';
import Cart from './screens/Cart.js';

import GlobalProvider from './context.js';

class App extends Component {
  
  render(){
    return (
      <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/cart" exact component={Cart}/>
          <hr />
          <img src={logo} className="App-logo" alt="logo" />
      </Router>
    );
  }
}

export default GlobalProvider(App);
