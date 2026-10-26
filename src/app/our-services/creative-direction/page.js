import React from "react";

const page = () => {
  const offers = [
    {
      title: "Concept Development",
      description:
        "Strategic ideation, mood boards, and storytelling that align with your goals.",
    },
    {
      title: "Brand Identity & Design",
      description:
        "Logos, packaging, and brand visuals that reflect your message and values.",
    },
    {
      title: "Art Direction",
      description:
        "Visual cohesion across photo, video, graphics, and styling.",
    },
    {
      title: "Campaign & Content Strategy",
      description:
        "From digital to print, we shape and lead creative campaigns that connect.",
    },
    {
      title: "Digital Experiences",
      description:
        "Web, app, and interactive media design that’s user-focused and engaging.",
    },
    {
      title: "Creative Consulting",
      description:
        "Ongoing support to align creative decisions with business strategy.",
    },
  ];

  return (
    <div className="service-template">
      <div className="service-shell">
        <header className="service-header">
          <span className="section-kicker">Creative direction</span>
          <h1>Creative strategy with a bold visual point of view.</h1>
          <p>
            We bring bold ideas to life through strategic, visually compelling
            creative direction. From branding campaigns to product launches, we
            guide your vision from concept to execution.
          </p>
        </header>

        <section className="service-section">
          <h2>What we offer</h2>
          <div className="service-grid">
            {offers.map((offer) => (
              <article key={offer.title} className="service-card">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-section service-section--compact">
          <div className="service-highlight">
            <h3>Why choose us?</h3>
            <ul>
              <li>Tailored creative vision aligned with your goals</li>
              <li>Collaborative process with strategic insight</li>
              <li>Cross-disciplinary expertise across media, design, and digital</li>
              <li>Top-tier execution with professional creative partners</li>
            </ul>
          </div>
          <div className="service-highlight">
            <h3>Who we work with</h3>
            <p>Branding · Fashion · Tech · Nonprofits · Media · Startups · Corporate Ventures</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
