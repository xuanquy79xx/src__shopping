import React from 'react';
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart';
import ProductDetail from './Components/productDetails/productDetail';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import Login from './Components/login/login';
import Register from './Components/login/register';
import User from './Components/user';
import CheckOut from './Components/checkout/checkout';
function App() {
  document.title = "Shopping"
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/cart" component={Cart} />
          <Route path="/product-detail" component={ProductDetail} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user" component={User} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
