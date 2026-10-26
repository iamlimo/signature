"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact-us" },
  ];

  const serviceLinks = [
    { name: "Content Production", path: "/our-services/content-production" },
    { name: "Creative Direction", path: "/our-services/creative-direction" },
    { name: "Film Production", path: "/our-services/film-production" },
    {
      name: "Music & Sound Production",
      path: "/our-services/music-production",
    },
  ];

  return (
    <nav className="site-navbar">
      <div className="site-navbar__inner">
        <div className="site-navbar__brand">
          <Image
            src="/spn-logo.png"
            alt="Signature Pictures Network logo"
            width={120}
            height={56}
            className="site-navbar__logo"
          />
        </div>

        <div className="site-navbar__desktop">
          <a href="/">Home</a>
          <a href="/about-us">About</a>
          <div className="site-navbar__dropdown">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="site-navbar__toggle"
              type="button"
            >
              <span>Services</span>
              <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="site-navbar__menu">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="site-navbar__menu-item"
                    onClick={() => setServicesOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a href="/contact-us">Contact</a>
          <Link href="/contact-us" className="site-navbar__cta">
            Let’s Talk
          </Link>
        </div>

        <div className="site-navbar__mobile-toggle">
          <button onClick={() => setIsOpen(!isOpen)} type="button" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="site-navbar__mobile">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="site-navbar__mobile-group">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="site-navbar__mobile-services"
              type="button"
            >
              Services <ChevronDown size={16} className="inline ml-1" />
            </button>
            {servicesOpen && (
              <div className="site-navbar__mobile-menu">
                {serviceLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact-us" className="site-navbar__cta site-navbar__cta--mobile" onClick={() => setIsOpen(false)}>
            Let’s Talk
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
