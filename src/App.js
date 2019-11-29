import React from "react";
//Import router
import { Route, Switch } from "react-router-dom";
import "./App.css";
// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import components
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import ShoppingCart from "./components/ShoppingCart";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/shoppingcart" component={ShoppingCart} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
