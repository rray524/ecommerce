import './App.css';
import Cart from './Pages/Cart';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home';
import ProductLists from './Pages/ProductLists';
import Product from './Components/Product';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Pay from './Pages/Pay';
import Success from './Pages/Success';
function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductLists />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/success">
            <Success></Success>
          </Route>
          <Route path="/pay">
            <Pay />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
