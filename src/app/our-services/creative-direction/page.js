import React from "react";

const page = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Creative Direction Service
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We bring bold ideas to life through strategic, visually compelling
          creative direction. From branding campaigns to product launches, we
          guide your vision from concept to execution.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            What We Offer
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-1">Concept Development</h3>
              <p className="text-gray-600">
                Strategic ideation, mood boards, and storytelling that align
                with your goals.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-1">
                Brand Identity & Design
              </h3>
              <p className="text-gray-600">
                Logos, packaging, and brand visuals that reflect your message
                and values.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-1">Art Direction</h3>
              <p className="text-gray-600">
                Visual cohesion across photo, video, graphics, and styling.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-1">
                Campaign & Content Strategy
              </h3>
              <p className="text-gray-600">
                From digital to print, we shape and lead creative campaigns that
                connect.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-1">Digital Experiences</h3>
              <p className="text-gray-600">
                Web, app, and interactive media design that’s user-focused and
                engaging.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-1">Creative Consulting</h3>
              <p className="text-gray-600">
                Ongoing support to align creative decisions with business
                strategy.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Tailored creative vision aligned with your goals</li>
            <li>Collaborative process with strategic insight</li>
            <li>
              Cross-disciplinary expertise across media, design, and digital
            </li>
            <li>Top-tier execution with professional creative partners</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Who We Work With
          </h2>
          <p className="text-gray-600">
            Branding · Fashion · Tech · Nonprofits · Media · Startups ·
            Corporate Ventures
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Let’s create something extraordinary.
          </h3>
          <p className="text-gray-600">
            Contact us to bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
