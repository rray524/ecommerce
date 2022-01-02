import './App.css';
import Cart from './Pages/Cart';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './Pages/Home';
import ProductLists from './Pages/ProductLists';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Pay from './Pages/Pay';
import Success from './Pages/Success';
import ProductSingle from './Pages/ProductSingle';
import ScrollToTop from './Components/ScrollToTop';
function App() {
  const user = false;
  return (
    <div className="main">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products/:category">
              <ProductLists />
            </Route>
            <Route path="/product/:id">
              <ProductSingle />
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
              {user ? <Redirect /> : <Login />}
            </Route>
            <Route path="/register">
              {user ? <Redirect to="/" /> : <Register />}
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
