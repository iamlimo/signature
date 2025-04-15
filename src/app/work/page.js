import React from "react";
import Navbar from "../components/Navbar";
import "./Work.css";
import Services from "../components/Services";
import Footer from "../components/Footer";
const Work = () => {
  return (
    <>
      <Navbar />
      <div className="work bg-[#222222] text-white">
        <div className="work-content justify-center text-center">
          <h1>Signature Pictures Network</h1>
          <p>
            We are a video production company that specializes in creating
            high-quality videos for businesses and organizations. Our team of
            experienced professionals is dedicated to helping you tell your
            story through the power of video. We offer a wide range of services,
            including corporate videos, promotional videos, event coverage, and
            more. Whether you need a simple video for your website or a complex
            production for a major event, we have the skills and expertise to
            deliver exceptional results.
          </p>
          <div className="flex justify-center video-full">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/4mFxqJAqX9k"
              title="ÌLẸ̀KẸ̀ (The Heir of Oyinde) EP1 - Nollywood - Raph Niyi, Fuad Ferdinand, Fatai Osin - #nollywood"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="services">
          <Services />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Work;
