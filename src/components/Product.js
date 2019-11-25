import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, image, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="image-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img
                      src={image}
                      alt="product"
                      className="card-img-top"
                    ></img>
                  </Link>
                  <button
                    className="cart-button"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        {" "}
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus"></i>
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          {/* Card Footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-darkBlue font-bold mb-0">
              <span className="mr-0">£</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: rgba(0, 0, 0, 0.2);
    transition: all 1s linear;
  }

  .card-footer {
    transition: all 1s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid var(--lightBlue);
      box-shadow: 5px 5px 7.5px 0px rgba(0, 0, 0, 0.2);_
    }

    .card-footer {
      background: rgba(22. 22, 22);
    }
  }

  .image-container {
    position: relative;
    overflow: hidden;
  }
  
  .card-img-top {
    transition: all 1s linear;
  }

  .image-container:hover .card-img-top {
    transform: scale(1.15);
  }

  .cart-button {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.2rem, 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--white);
    font-size: 1.4rem;
    border-radius: 0 0.5rem 0 0;
    transform: translate(-100%, 100%); 
    transition: all 1s ease-in-out;
    outline: none;
  }

  .image-container: hover .cart-button {
    transform: translate(0, 0);_
  }

  .cart-button: hover {
    color: var(--darkBlue);
    cursor: pointer;
  }
`;
