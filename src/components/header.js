import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header-grid">
        <div className="link-grid-left">
          <div>
            <a id="home" href="#">
              Home
            </a>
          </div>
          <div>
            <a id="contact" href="#">
              Contact
            </a>
          </div>
        </div>
        <div className="logo-container">
          <a href="#">
            <img src="assets/paul_logo.png" alt="logo" />
          </a>
        </div>
        <div className="link-grid-right">
          <div>
            <a id="shop" href="#">
              Shop
            </a>
          </div>
          <div>
            <a id="checkout" href="#">
              <i class="fas fa-shopping-cart" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
