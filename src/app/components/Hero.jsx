import React from "react";
import "./Hero.css";
import { useGlitch } from "react-powerglitch";
const Hero = () => {
  const glitch = useGlitch();
  return (
    <section className="hero-container">
      <video
        className="hero-video"
        src="/videos/showreel.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <h3>
          <span ref={glitch.ref}>SIGNATURE PICTURES NETWORK 🌎</span>
        </h3>
        <h1>
          We Bring Ideas to Life Through
          <br />
          Cinematic Storytelling.
        </h1>
        <p>Crafting visual experiences that captivate and convert.</p>
        <button className="hero-btn">
          <a href="">Watch ILEKE the series</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
