"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Projects from "./components/Projects";
import { useGlitch } from "react-powerglitch";

import Footer from "./components/Footer";
import Services from "./components/Services";
import Partners from "./components/Partners";

import dynamic from "next/dynamic";

const VideoBackground = dynamic(() => import("./components/Hero"), {
  ssr: false, // Avoid rendering on server
  loading: () => <div className="bg-black w-full h-full absolute -z-10" />, // optional fallback
});

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
          <a href="/founder-speech">
            {" "}
            <button className="hero-btn">Read Our Story</button>
          </a>
        </div>
      </div>
      <div className="services bg-[#1B1B1B] text-white signature">
        <Services />
      </div>
      {/* end of services */}
      <div className="projects bg-[#C72537] text-white signature">
        <h2>Our Projects</h2>
        <div className="flex flex-wrap gap-4">
          <div className="inline-block  text-white p-4">
            <h2 ref={glitch.ref}>
              20k+ views on <a href="">Youtube</a> already
            </h2>
          </div>
          <div className="inline-block text-white p-4">
            {" "}
            <button className="btn">
              <a href="https://www.youtube.com/watch?v=4mFxqJAqX9k&t=747s">
                Watch Now{" "}
              </a>
            </button>
          </div>
        </div>

        <Projects />
      </div>
      {/* end of projects */}

      <div className="partners bg-[#1B1B1B] text-white signature">
        <Partners />
      </div>
      <div className="team signature bg-[#000000] text-white">
        <h2>Our Team</h2>
        <h3>Our team of creative and talented individuals</h3>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="">
              <img src="/sanni.png" className="rounded-xl shadow" width={250} />
              <h4 className="text-2xl font-bold">Sanni Dhikrulah Olaniyi</h4>
              <p className="text-sm">Founder/ Creative Director</p>
            </div>

            <div className="">
              <img src="/limo.png" className="rounded-xl shadow" width={250} />
              <h4 className="text-2xl font-bold">Limo</h4>
              <p className="text-sm">Co-founder / CTO</p>
            </div>

            <div className="">
              <img
                src="/future.png"
                className="rounded-xl shadow"
                width={250}
              />
              <h4 className="text-2xl font-bold">Okeke Victor Chinemere</h4>
              <p className="text-sm">Creative Designer</p>
            </div>
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
        <button className="hero-btn mb-1">
          <a href="mailto: info@signaturepictures.co">Contact Us</a>
        </button>
        <div className="spacey"></div>
        <hr />
      </div>
      {/* end of contact */}
      <Footer />
    </>
  );
};

export default Home;
