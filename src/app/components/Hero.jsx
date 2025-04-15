import React from "react";
import "./Hero.css";
import { useGlitch } from "react-powerglitch";
const Hero = () => {
  const glitch = useGlitch();
  return (
    <section className="hero-container">
      <video
        className="hero-video"
        src="https://drive.google.com/file/d/1mbA_b037nWEL3-hze3_a9A-sBhyIJQ9u/view"
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
          <a href="https://www.youtube.com/watch?v=4mFxqJAqX9k&t=747s">
            Watch ILEKE the series
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
