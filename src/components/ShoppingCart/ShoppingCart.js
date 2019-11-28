import React, { Component } from "react";
import CartLayout from "./CartLayout";
import Title from "../Title";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotal from "./CartTotal"

export default class ShoppingCart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="shopping" title="cart"></Title>
                  <CartLayout />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
