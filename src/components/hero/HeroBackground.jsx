import React from "react";

const HeroBackground = () => (
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/images/joker.jpg')",
      filter: "brightness(0.6)",
    }}
  />
);

export default HeroBackground;
