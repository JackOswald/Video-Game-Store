import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

// Creating a provider and consumer for the information
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartVAT: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  }

  // Obtain copy of values from data.js
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  // Get the id values of an item
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  // Set the template product to our current product
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  // Add the specific object to cart using id
  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
          detailProduct: { ...product }
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // Open modal when clicked on image
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  // Close modal when clicked back or checkout
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // Add one to the selected item in cart
  increment = id => {
    // Get cart values from the current state
    let tempCart = [...this.state.cart];
    const incProduct = tempCart.find(item => {
      return item.id === id;
    });

    // Get index of item to be incremented
    const index = tempCart.indexOf(incProduct);
    const product = tempCart[index];

    // Add to the count and total
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals());
  };

  // Subtract one from the selected item in cart
  decrement = id => {
    // Get cart values from the current state
    let tempCart = [...this.state.cart];
    const decProduct = tempCart.find(item => {
      return item.id === id;
    });

    // Get index of item to be decremented
    const index = tempCart.indexOf(decProduct);
    const product = tempCart[index];

    // Subtract from the count and total
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(() => {
        return {
          cart: [...tempCart]
        };
      }, this.addTotals());
    }
  };

  // Remove a single item from cart
  removeItem = id => {
    // Get products from the current state
    let tempProducts = [...this.state.products];

    // Get cart values from the current state
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];

    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          product: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // Clear the cart and get new copies of object data
  clearCart = id => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  // Retrieve and calculate totals from all items in cart
  getTotals = () => {
    // Retrieve the current sub total from current state
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));

    // Calculate VAT from sub total
    const tempVAT = subTotal * 0.2;
    const VAT = parseFloat(tempVAT.toFixed(2));

    // Add VAT and sub total together for total
    const tempTotal = subTotal + VAT;
    const total = parseFloat(tempTotal.toFixed(2));

    return {
      subTotal,
      VAT,
      total
    };
  };

  // Retrieve totals previously calculated and update the state
  addTotals = () => {
    const totals = this.getTotals();

    this.setState(() => {
      return {
        cartSubTotal: totals.subTotal,
        cartVAT: totals.VAT,
        cartTotal: totals.total
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
