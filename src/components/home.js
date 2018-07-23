import React, { Component } from "react";
import $ from "jquery";

class Home extends Component {
  render() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      $("assets/smoke.mp4").scss({
        width: 100 + scroll / 5 + "%"
      });
    });
    return (
      <div className="home">
        <div className="home-video-container">
          <video autoPlay loop preload="auto">
            <source src="assets/smoke.mp4" type="video/mp4" />
            <source src="assets/smoke.mp4" type="video/webm" />
            <source src="assets/smoke.mp4" type="video/ogg" />
          </video>
        </div>
        <div className="home-intro">
          <h1>Northern California's Finest</h1>
          <p>
            Trippyroads has been perfecting the art of oil extraction for four
            decades and just as fine wine has its own grape, each of our oils
            has its own flavor profile unique to the strain it was taken from.
            Our oils are 100% raw, uncut organic cannabis oils extracted from
            the finest strains on earth. All of our oils are extracted with CO2
            and are NEVER heated or distilled to ensure the natural composition
            and live enzymes of the oil are not altered. We extract our oils in
            “small batch runs”, in other words, when the label says OG Kush you
            are getting OG Kush, NOT an added flavor terpene of OG Kush. The
            taste of our oils is second to none, leaving the cleanest, purest
            flavor on the palette with no plant matter to mask the true flavor
            of the strain. If you are a connoisseur of fine cannabis oils.
            Trippyroads is a treat for the body and soul!
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
