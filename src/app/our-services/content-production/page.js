import React from "react";
import { BriefcaseBusiness, Palette, Video } from "lucide-react";

const page = () => {
  const services = [
    {
      title: "Strategy & Planning",
      description:
        "We collaborate with you to develop a tailored content strategy that meets your objectives and speaks directly to your audience.",
      icon: <BriefcaseBusiness className="w-6 h-6 mb-2" />,
    },
    {
      title: "Creative Development",
      description:
        "From concept creation to scriptwriting, storyboarding, casting, and location scouting—we handle all the groundwork.",
      icon: <Palette className="w-6 h-6 mb-2" />,
    },
    {
      title: "Production",
      description:
        "Our team produces premium content through expert filming, photography, lighting, and sound—plus live streaming and virtual events.",
      icon: <Video className="w-6 h-6 mb-2" />,
    },
    {
      title: "Post-Production",
      description:
        "We polish your content with professional editing, motion graphics, sound design, and color grading—delivering a final product that stands out.",
      icon: <BriefcaseBusiness className="w-6 h-6 mb-2" />,
    },
    {
      title: "Distribution & Marketing",
      description:
        "We optimize and publish your content across platforms (YouTube, Instagram, LinkedIn, Signature App, and more), supported by performance tracking and reporting.",
      icon: <Palette className="w-6 h-6 mb-2" />,
    },
  ];

  const contentTypes = [
    "Videos",
    "Audio",
    "Written",
    "Visuals",
    "Live & Virtual Events",
  ];

  return (
    <div className="service-template">
      <div className="service-shell">
        <header className="service-header">
          <span className="section-kicker">Content production</span>
          <h1>Content that informs, inspires, and performs.</h1>
          <p>
            At Signature Pictures Network, we bring your ideas to life through
            compelling visuals and stories. Whether you’re looking to inform,
            promote, or entertain, our content aligns with your brand and
            captivates your audience.
          </p>
        </header>

        <section className="service-section">
          <h2>What we do</h2>
          <div className="service-grid">
            {services.map((service, index) => (
              <article key={index} className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="service-section">
          <h2>Types of content we produce</h2>
          <div className="service-tags">
            {contentTypes.map((type, idx) => (
              <span key={idx}>{type}</span>
            ))}
          </div>
        </section>

        <section className="service-section service-section--compact">
          <div className="service-highlight">
            <h3>Why choose Signature?</h3>
            <p>
              We serve a wide range of industries, delivering professional-grade,
              impactful content tailored to your brand. Ready to create content
              that makes an impact?
            </p>
          </div>
          <div className="service-highlight">
            <h3>Start your project</h3>
            <p>
              Let’s collaborate on your next big idea. <a href="/contact-us">Contact us</a> today to get started.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
