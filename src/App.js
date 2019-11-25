import React from "react";
import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/shoppingcart" component={ShoppingCart} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
