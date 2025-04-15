"use client";
import React from "react";
import Navbar from "../components/Navbar";
import "./Contact-us.css";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="hero contact bg-[#212121]">
        <div className="gap-6 signature">
          <h2>We’ve been waiting for you!</h2>
          <p>
            If you would like to work with us or just want to get in touch, we’d
            love to hear from you!
          </p>
        </div>
        <div className="container mx-auto px-4 py-8 info">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold mb-2">Office Address</h2>
              <p>
                Scandic Court 1, Our Daily Manner Rd, Ikate, Lekki, Lagos,
                Nigeria
              </p>
            </div>
            <div className=" rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold mb-2">Phone</h2>
              <p>+234 707 393 6362</p>
            </div>
            <div className="rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold mb-2"> Email Address</h2>
              <p>
                <a href="mailto:info@signaturepicture.co">
                  info@signaturepicture.co
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
