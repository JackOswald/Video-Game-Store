import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto mt-3 text-center text-title">
          <h1>Your cart is currently empty</h1>
          <Link to="/">
            <ButtonContainer className="mt-5">Back to Products</ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  );
}
