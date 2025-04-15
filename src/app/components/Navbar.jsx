"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <img src="/spn-logo.png" alt="" width={100} />
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/about-us">About</a>
        <a href="/work">Work</a>
        {/* <a href="#">Services</a> */}
        <a href="/contact-us">Contact</a>
      </nav>

      <button className="cta-btn">Let’s Talk</button>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
