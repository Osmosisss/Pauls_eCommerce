import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <video id="smoke-video" autoPlay controls loop preload="auto">
          <source src="assets/smoke.mp4" type="video/mp4" />
          <source src="assets/smoke.mp4" type="video/webm" />
          <source src="assets/smoke.mp4" type="video/ogg" />
        </video>
        <div className="home-welcome">
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
