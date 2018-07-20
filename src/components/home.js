import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-welcome">
          <video autoplay loop preload="auto">
            <source src="assets/smoke.mp4" type="video/mp4" />
          </video>
          <div className="home-welcome-container">
            <div className="home-header">
              <div className="home-subheader" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
