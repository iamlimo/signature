import React from "react";
import Navbar from "../components/Navbar";
import "./Work.css";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Work = () => {
  return (
    <>
      <Navbar />
      <main className="work-page">
        <section className="work-hero">
          <div className="work-hero__content">
            <span className="section-kicker">Our work</span>
            <h1>Stories with impact, crafted for screens that matter.</h1>
            <p>
              We create cinematic, culture-driven visual experiences for brands,
              artists, institutions, and businesses that want to stand out.
              From branded storytelling to motion-led campaigns and event
              coverage, every frame is designed to connect and convert.
            </p>
          </div>
        </section>

        <section className="work-showcase">
          <div className="video-frame">
          <iframe width="1337" height="752" src="https://www.youtube.com/embed/ykubqpR95Xs" title="ÌLẸ̀KẸ̀ (The Hidden Heir) - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </section>

        <section className="work-services">
          <div className="section-heading">
            <span className="section-kicker">Our capabilities</span>
            <h2>What we do</h2>
          </div>
          <Services />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Work;
