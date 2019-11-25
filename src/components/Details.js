import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            developer,
            image,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-3">
              {/* Title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-darkBlue my-4">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* Product Image */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={image} className="img-fluid" alt="product"></img>
                </div>
                {/* Product Description */}
                <div className="col-10 mx-auto col-md-4 my-3">
                  <h4 className="text-title text-uppercase text-muted mt-4 mb-2">
                    Developer:{" "}
                    <span className="text-uppercase">{developer}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>£</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-4 mb-0">
                    Description:{" "}
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "In Cart" : "Buy"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
