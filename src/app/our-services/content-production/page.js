import React from "react";
import { BriefcaseBusiness, Palette, Video } from "lucide-react";

const page = () => {
  const services = [
    {
      title: "Strategy & Planning",
      description:
        "We collaborate with you to develop a tailored content strategy that meets your objectives and speaks directly to your audience.",
      icon: <BriefcaseBusiness className="w-6 h-6 mb-2" />,
      color: "bg-blue-500",
    },
    {
      title: "Creative Development",
      description:
        "From concept creation to scriptwriting, storyboarding, casting, and location scouting—we handle all the groundwork.",
      icon: <Palette className="w-6 h-6 mb-2" />,
      color: "bg-green-500",
    },
    {
      title: "Production",
      description:
        "Our team produces premium content through expert filming, photography, lighting, and sound—plus live streaming and virtual events.",
      icon: <Video className="w-6 h-6 mb-2" />,
      color: "bg-red-500",
    },
    {
      title: "Post-Production",
      description:
        "We polish your content with professional editing, motion graphics, sound design, and color grading—delivering a final product that stands out.",
      icon: <BriefcaseBusiness className="w-6 h-6 mb-2" />,
      color: "bg-blue-500",
    },
    {
      title: "Distribution & Marketing",
      description:
        "We optimize and publish your content across platforms (YouTube, Instagram, LinkedIn, Signature App, and more), supported by performance tracking and reporting.",
      icon: <Palette className="w-6 h-6 mb-2" />,
      color: "bg-green-500",
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
    <div className="px-4 md:px-12 py-10 max-w-screen-xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Content Production Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At Signature Pictures Network, we bring your ideas to life through
          compelling visuals and stories. Whether you're looking to inform,
          promote, or entertain, our content aligns with your brand and
          captivates your audience.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">What We Do</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`text-white p-6 rounded-xl shadow-md ${service.color}`}
            >
              <div className="flex flex-col items-start">
                {service.icon}
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Types of Content We Produce
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {contentTypes.map((type, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl shadow-md p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-800">{type}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Who We Work With</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Corporate & B2B | E-commerce & Retail | Entertainment & Media |
          Education & Nonprofits | Healthcare & Pharmaceuticals
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-medium mb-2">Why Choose Signature?</h3>
          <p className="text-gray-700">
            We serve a wide range of industries, delivering professional-grade,
            impactful content tailored to your brand. Ready to create content
            that makes an impact?
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-medium mb-2">Start Your Project</h3>
          <p className="text-gray-700">
            Let’s collaborate on your next big idea. Contact us today to get
            started.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
