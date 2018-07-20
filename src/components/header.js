import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header-grid">
        <div className="logo-container">
          <img src="assets/paul_logo.png" alt="logo" />
        </div>
        <div className="link-grid">
          <a id="home" href="#">
            Home
          </a>
          <a id="contact" href="#">
            Contact
          </a>
          <a id="shop" href="#">
            Shop
          </a>
        </div>
        <div className="checkout">
          <a href="#">
            <i class="fas fa-shopping-cart" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
