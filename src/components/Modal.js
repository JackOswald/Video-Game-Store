import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { image, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modalContainer"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center p-4"
                    >
                      {/* Heading Message */}
                      <h5> Item has been added to your cart</h5>
                      {/* Image */}
                      <img
                        src={image}
                        className="img-fluid"
                        alt="product"
                      ></img>
                      {/* Title */}
                      <h5>{title}</h5>
                      {/* Price */}
                      <h5 className="text-muted">Price: £{price}</h5>
                      {/* Buttons */}
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          Back To Store
                        </ButtonContainer>
                      </Link>
                      <Link to="/ShoppingCart">
                        <ButtonContainer onClick={() => closeModal()}>
                          To Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modalContainer {
    background: var(--white);
  }
`;
