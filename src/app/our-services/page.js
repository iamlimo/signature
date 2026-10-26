import React from "react";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <div className="service-template">
      <div className="service-shell">
        <header className="service-header">
          <span className="section-kicker">What we do</span>
          <h1>Creative solutions built for impact.</h1>
          <p>
            From content strategy to production and post-production, we build
            compelling visual stories that help brands and creators connect with
            audiences in meaningful ways.
          </p>
        </header>

        <div className="service-grid service-grid--wide">
          <Services />
        </div>
      </div>
    </div>
  );
}
