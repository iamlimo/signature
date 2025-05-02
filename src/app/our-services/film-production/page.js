import React from "react";

const page = () => {
  const services = [
    {
      title: "Pre-Production",
      icon: "📋",
      description:
        "Scriptwriting, budgeting, casting, location scouting, scheduling, crew assembly",
    },
    {
      title: "Production",
      icon: "📽️",
      description:
        "High-quality filming, directing, cinematography, on-set sound recording, shoot management",
    },
    {
      title: "Post-Production",
      icon: "🎞️",
      description:
        "Video editing, sound design, visual effects, color grading, scoring, titles' graphics",
    },
    {
      title: "Distribution & Marketing",
      icon: "🎬",
      description:
        "Film distribution strategy, promotional content, premiere planning, performance marketing",
    },
  ];

  const filmTypes = [
    "Videos",
    "Audio",
    "Written",
    "Visuals",
    "Live & Virtual Events",
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
        🎬 Film Production Services
      </h1>
      <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        Create. Capture. Captivate. At Signature Pictures Network, we offer
        end-to-end film production services for commercial, corporate,
        entertainment, and educational projects. From concept to screen, we
        bring your story to life with cinematic excellence.
      </p>

      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 flex items-center gap-2">
          <span className="text-3xl">📍</span> Our Services Include:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.icon} {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          🎥 Types of Films We Produce:
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {filmTypes.map((type, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-800">{type}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            <iframe
              width="500"
              height="300"
              src="https://www.youtube.com/embed/ykubqpR95Xs"
              title="ÌLẸ̀KẸ̀ (The Hidden Heir) - Official Trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </h3>
        </div>
        <div className="bg-gray-100 rounded-xl shadow-md p-6 text-left">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Why Choose Signature?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Industry-grade production quality</li>
            <li>Creative, results-driven storytelling</li>
            <li>A full-service team with technical expertise</li>
            <li>Timely delivery and transparent communication</li>
          </ul>
          <p className="mt-6 text-gray-800">
            Ready to create content that makes an impact?
          </p>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all">
            <a href="/contact-us" target="_blank">
              {" "}
              Let’s Talk – Start Your Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
