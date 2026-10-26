import React from "react";
import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Image
            src="/spn-logo.png"
            alt="Signature Pictures Network logo"
            className="footer__logo"
            width={74}
            height={74}
          />
          <div>
            <p className="footer__title">Signature Pictures Network</p>
            <p className="footer__tagline">Content • Culture • Craft</p>
          </div>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          <a href="/about-us" className="footer__link">About</a>
          <a href="/our-services" className="footer__link">Services</a>
          <a href="/work" className="footer__link">Work</a>
          <a href="/contact-us" className="footer__link">Contact</a>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>© 2025 Signature Pictures Network. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
