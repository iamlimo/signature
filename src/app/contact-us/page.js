"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact-us.css";

const contactDetails = [
  {
    title: "Office Address",
    value:
      "Scandic Court 1, Our Daily Manner Rd, Ikate, Lekki, Lagos, Nigeria",
    href: null,
  },
  {
    title: "Phone",
    value: "+234 902 630 8433",
    href: "tel:+2349026308433",
  },
  {
    title: "Email Address",
    value: "info@signaturepicture.co",
    href: "mailto:info@signaturepicture.co",
  },
];

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero__content">
            <p className="contact-kicker">Let’s build your next story</p>
            <h1>We’ve been waiting for you.</h1>
            <p className="contact-intro">
              If you want to work with us or simply connect, we’d love to hear
              from you. Tell us what you’re creating, and we’ll help shape it.
            </p>
            <div className="contact-actions">
              <a href="mailto:info@signaturepicture.co" className="primary-btn">
                Email us
              </a>
              <a href="tel:+2349026308433" className="secondary-btn">
                Call now
              </a>
            </div>
          </div>
        </section>

        <section className="contact-info">
          <div className="contact-grid">
            {contactDetails.map((item) => (
              <article key={item.title} className="contact-card">
                <span className="contact-card__label">{item.title}</span>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <p>{item.value}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
