import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <i className="fas fa-home fa-3x"></i>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/ShoppingCart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
export default Navbar;

const NavWrapper = styled.nav`
  background: var(--grey);
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 1);
  .nav-link {
    color: var(--lightBlue) !important;
    font-size: 1.3rem; // 1 rem = 16 px
    text-transform: capitalize;

    &:hover {
      color: var(--darkBlue) !important;
    }
  }
`;
