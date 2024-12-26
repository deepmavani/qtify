import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src="/assets/HeroImage.png"
        alt="Hero"
        className="hero-image"
      />
      <div className="hero-text">
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands podcast episodes</p>
      </div>
    </div>
  );
};

export default Hero;
