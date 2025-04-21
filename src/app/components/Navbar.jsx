"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Content Production", path: "/our-services/content-production" },
    { name: "Creative Direction", path: "/services/creative-direction" },
    { name: "Film Production", path: "/services/film-production" },
    { name: "Music & Sound Production", path: "/services/music-sound" },
  ];

  return (
    <nav className="bg-black text-white px-4 py-3 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/spn-logo.png" alt="Logo" className="h-14 w-auto" />
          {/* <div className="text-sm uppercase font-semibold leading-tight">
            Signature Pictures
            <br />
            <span className="text-xs font-light tracking-widest">Network</span>
          </div> */}
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="hover:text-red-500 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center space-x-1 hover:text-red-500 transition"
            >
              <span>Services</span>
              <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="absolute mt-2 bg-white text-black rounded-md shadow-md py-2 w-56 z-50">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="block px-4 py-2 hover:bg-red-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-md"
          >
            Let’s Talk
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-center py-2"
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="text-center">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-white py-2"
            >
              Services <ChevronDown size={16} className="inline ml-1" />
            </button>
            {servicesOpen && (
              <div className="mt-2 bg-white text-black rounded-md shadow-md py-2 mx-8">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 hover:bg-red-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-md"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
