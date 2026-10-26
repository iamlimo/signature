"use client";
import Image from "next/image";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGlitch } from "react-powerglitch";
import "./About.css";

const About = () => {
  const glitch = useGlitch();

  return (
    <>
      <Navbar />
      <main className="about-page">
        <section className="about-hero">
          <div className="about-content">
            <span className="section-kicker">About us</span>
            <h1>We turn ideas into stories people remember.</h1>
            <h2 ref={glitch.ref}>Crafting visual stories that leave a signature mark.</h2>
            <p>
              At Signature Pictures Network, we’re more than just a video
              production company — we’re visual storytellers, brand architects,
              and creative collaborators. Our mission is simple: to help
              individuals and brands turn their vision into compelling video
              content that resonates, engages, and inspires.
            </p>
          </div>
        </section>

        <section className="about-image-block">
          <Image
            src="/about-spn.png"
            alt="Signature Pictures Network team and work"
            width={1600}
            height={900}
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </section>

        <section className="about-services">
          <div className="section-heading">
            <span className="section-kicker">What we do</span>
            <h2>Our services</h2>
          </div>
          <Services />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
