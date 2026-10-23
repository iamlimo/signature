import React from "react";
import Image from "next/image";
import "./Hero.css";
import { useGlitch } from "react-powerglitch";

const Hero = () => {
  const glitch = useGlitch();

  return (
    <section className="hero-container">
      <div className="hero-poster">
        <Image
          src="/Key Art Selected Abstract.png"
          alt="Signature Pictures Network cinematic banner"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

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
          <a href="https://signaturetv.co/tvshow/l-k-the-heir-of-oyinde">
            Watch ILEKE the series
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
