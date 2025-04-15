"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Projects from "./components/Projects";
import { useGlitch } from "react-powerglitch";


import Footer from "./components/Footer";
import Services from "./components/Services";

const Home = () => {
  const glitch = useGlitch();
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex-container flexxy">
        <Ticker
          text="🚀We love to create high quality cinematography."
          speed={50}
        />
      </div>
      <div className="founderSpeechField signature">
        <div className="founderSpeechContent">
          <h2>Founder Speech</h2>
          <p>
            My name is Sanni Dhikrulah Olaniyi, I’m a film producer and a story
            teller, the founder of Signature Pictures Network. I could remember
            growing up for me watching different soap operas like the super
            stories has helped in shaping my vision and passion towards
            storytelling to create my own super stories.
          </p>
          <br />
          <button className="hero-btn">Read Our Story</button>
        </div>
      </div>
      <div className="services bg-[#1B1B1B] text-white signature">
        <Services />
      </div>
      {/* end of services */}
      <div className="projects bg-[#C72537] text-white signature">
        <h2>Our Projects</h2>
        <h2 ref={glitch.ref}>
          20k+ views on <a href="">Youtube</a> already
        </h2>
        <Projects />
      </div>
      {/* end of projects */}
      <div className="team signature bg-[#000000] text-white">
        <h2>Our Team</h2>
        <h3 ref={glitch.ref}>Our team of creative and talented individuals</h3>
        <div className="flex items-center gap-6 p-4">
          <div className="px-6 py-4">
            <img src="/sanni.png" className="rounded-xl shadow" width={250} />
            <h4 className="text-2xl font-bold">Sanni</h4>
            <p className="text-sm">Founder/ Creative Director</p>
          </div>
          <div className="px-6 py-4 rounded-xl shadow">
            <img src="/limo.png" className="rounded-xl shadow" width={250} />
            <h4 className="text-2xl font-bold">Sanni</h4>
            <p className="text-sm">Co-founder/ CTO</p>
          </div>
          <div className="px-6 py-4 rounded-xl shadow">
            <img src="/future.png" className="rounded-xl shadow" width={250} />
            <h4 className="text-2xl font-bold">Sanni</h4>
            <p className="text-sm">Creative Designer</p>
          </div>
        </div>
      </div>
      {/* end of team */}
      <div className="contact bg-[#1B1B1B] signature">
        <h2>Get in touch</h2>
        <h3 ref={glitch.ref}>Let’s work together</h3>
        <p className="text-center">
          We are always open to discuss your project and improve your online
          presence.
        </p>
        <br />
        <button className="hero-btn mb-1"><a href="mailto: info@signaturepictures.co">Contact Us</a></button>
        <div className="spacey"></div>
        <hr />
      </div>
      {/* end of contact */}
      <Footer />
    </>
  );
};

export default Home;
