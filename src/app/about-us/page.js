"use client";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import "./About.css";
import Footer from "../components/Footer";
import { useGlitch } from "react-powerglitch";
const About = () => {
  const glitch = useGlitch();
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="about-content">
          <h1 className="text-3xl font-bold text-center mt-10">About Us</h1>
          <h2 ref={glitch.ref} className="text-center">
            {" "}
            Crafting Visual Stories That Leave a Signature Mark{" "}
          </h2>
          <p className="text-center">
            At Signature Pictures Network, we’re more than just a video
            production company — we’re visual storytellers, brand architects,
            and creative collaborators. Our mission is simple: to help
            individuals and brands turn their vision into compelling video
            content that resonates, engages, and inspires.
          </p>
        </div>
        <div className="img-full">
          <img src="/about-spn.png" alt="" className="" />
        </div>
        <div className="services">
          <h2 className="text-2xl font-bold text-center mb-4">Our Services</h2>
          <Services />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
