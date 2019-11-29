import React from "react";
import { Link } from "react-router-dom";

export default function CartTotal({ value }) {
  const { cartVAT, cartTotal, clearCart } = value;
  console.log({ value });
  return (
    <React.Fragment>
      <div className="container float-right">
        <div className="row">
          <div className="col-10 text-right text-capitalize">
            <Link to="/ShoppingCart">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h3>
              <span className="text-title">Total: </span>
              <strong>£{cartTotal}</strong>
            </h3>
            <h5>
              <span className="text-title text-muted lead">
                Included VAT 20%: £{cartVAT}
              </span>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
