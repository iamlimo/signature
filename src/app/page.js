"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Projects from "./components/Projects";
import { useGlitch } from "react-powerglitch";

import Footer from "./components/Footer";
import Services from "./components/Services";
import Partners from "./components/Partners";

const Home = () => {
  const glitch = useGlitch();
  return (
    <>
      <Navbar />
      <div className="home-page">
        <Hero />
        <div className="flex-container flexxy">
          <Ticker
            text="🚀We love to create high quality cinematography."
            speed={50}
          />
        </div>

        <div className="founderSpeechField signature section-shell">
          <div className="founderSpeechContent">
            <span className="section-kicker">Our story</span>
            <h2>Founder Speech</h2>
            <p>
              My name is Sanni Dhikrulah Olaniyi, I’m a film producer and a story
              teller, the founder of Signature Pictures Network. I could remember
              growing up for me watching different soap operas like the super
              stories has helped in shaping my vision and passion towards
              storytelling to create my own super stories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/founder-speech">
                <button className="hero-btn">Read Our Story</button>
              </a>
              <a href="/founder/resume">
                <button className="hero-btn">View Resume</button>
              </a>
            </div>
          </div>
        </div>

        <div className="services bg-[#1B1B1B] text-white signature section-shell">
          <Services />
        </div>

        <div className="projects bg-[#C72537] text-white signature section-shell">
          <div className="section-head-row">
            <h2>Our Projects</h2>
            <button className="btn">
              <a href="https://signaturetv.co">Watch Now</a>
            </button>
          </div>
          <div className="project-glitch" ref={glitch.ref} aria-hidden="true" />
          <Projects />
        </div>

        <div className="partners bg-[#1B1B1B] text-white signature section-shell">
          <Partners />
        </div>

        <div className="team signature bg-[#000000] text-white section-shell">
          <div className="section-title-wrap">
            <span className="section-kicker">The people</span>
            <h2>Our Team</h2>
          </div>
          <h3>Our team of creative and talented individuals</h3>
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 team-grid">
              <div className="team-card">
                <Image
                  src="/sanni.png"
                  alt="Sanni Dhikrulah Olaniyi"
                  className="rounded-xl shadow"
                  width={250}
                  height={250}
                />
                <h4 className="text-2xl font-bold">Sanni Dhikrulah Olaniyi</h4>
                <p className="text-sm">Founder / Creative Director</p>
              </div>

              <div className="team-card">
                <Image
                  src="/limo.png"
                  alt="Isaac Orija"
                  className="rounded-xl shadow"
                  width={250}
                  height={250}
                />
                <h4 className="text-2xl font-bold">Isaac Orija</h4>
                <p className="text-sm">Co-founder / CTO</p>
              </div>

              <div className="team-card">
                <Image
                  src="/future.png"
                  alt="Okeke Victor Chinemere"
                  className="rounded-xl shadow"
                  width={250}
                  height={250}
                />
                <h4 className="text-2xl font-bold">Okeke Victor Chinemere</h4>
                <p className="text-sm">Creative Designer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact bg-[#1B1B1B] signature section-shell home-contact">
          <span className="section-kicker">Start a conversation</span>
          <h2>Get in touch</h2>
          <h3 ref={glitch.ref}>Let’s work together</h3>
          <p className="text-center">
            We are always open to discuss your project and improve your online
            presence.
          </p>
          <div className="home-contact__actions">
            <a href="mailto:info@signaturepictures.co" className="hero-btn">
              Contact Us
            </a>
          </div>
          <div className="spacey"></div>
          <hr />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
