import React from "react";

const page = () => {
  const services = [
    {
      title: "Pre-Production",
      icon: "📋",
      description:
        "Scriptwriting, budgeting, casting, location scouting, scheduling, crew assembly.",
    },
    {
      title: "Production",
      icon: "📽️",
      description:
        "High-quality filming, directing, cinematography, on-set sound recording, and shoot management.",
    },
    {
      title: "Post-Production",
      icon: "🎞️",
      description:
        "Video editing, sound design, visual effects, color grading, scoring, and graphic design.",
    },
    {
      title: "Distribution & Marketing",
      icon: "🎬",
      description:
        "Film distribution strategy, promotional content, premiere planning, and performance marketing.",
    },
  ];

  const filmTypes = [
    "Commercials",
    "Corporate Films",
    "Documentaries",
    "Music Videos",
    "Event Coverage",
  ];

  return (
    <div className="service-template">
      <div className="service-shell">
        <header className="service-header">
          <span className="section-kicker">Film production</span>
          <h1>From concept to screen, we tell the story with cinematic precision.</h1>
          <p>
            Create. Capture. Captivate. At Signature Pictures Network, we offer
            end-to-end film production services for commercial, corporate,
            entertainment, and educational projects. From concept to screen, we
            bring your story to life with cinematic excellence.
          </p>
        </header>

        <section className="service-section">
          <h2>Our services include</h2>
          <div className="service-grid">
            {services.map((service, index) => (
              <article key={index} className="service-card">
                <h3>
                  {service.icon} {service.title}
                </h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-section">
          <h2>Types of films we produce</h2>
          <div className="service-tags">
            {filmTypes.map((type, index) => (
              <span key={index}>{type}</span>
            ))}
          </div>
        </section>

        <section className="service-section service-section--compact">
          <div className="service-highlight">
            <h3>Why choose Signature?</h3>
            <ul>
              <li>Industry-grade production quality</li>
              <li>Creative, results-driven storytelling</li>
              <li>A full-service team with technical expertise</li>
              <li>Timely delivery and transparent communication</li>
            </ul>
          </div>
          <div className="service-highlight">
            <h3>Ready to create something memorable?</h3>
            <p>
              <a href="/contact-us">Let’s talk</a> and start your next production.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
