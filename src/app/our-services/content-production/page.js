import React from "react";
import "./Content.css";
import { BriefcaseBusiness, Palette, Video } from "lucide-react";

const page = () => {
  return (
    <div>
      <div className="titleBanner">
        <h1> Content Production Services</h1>
      </div>
      <div className="content">
        <h2> High-Quality, End-to-End Content Creation</h2>
        <p>
          At Signature Pictures Network, we bring your ideas to life through
          compelling visuals and stories. Whether you're looking to inform,
          promote, or entertain, our content is crafted to align with your
          brand’s goals and captivate your audience.
        </p>
        <hr></hr>
      </div>
      <div className="content what-we">
        <h2>🔧 What We Do</h2>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="w-[300px] bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <span className="text-lg font-semibold mb-2">
              <BriefcaseBusiness />
            </span>
            <h2 className="icon mb-2">Strategy & Planning </h2>
            <p>
              We collaborate with you to develop a tailored content strategy
              that meets your objectives and speaks directly to your audience.
            </p>
          </div>

          <div className="w-[300px] bg-green-500 text-white p-6 rounded-lg shadow-md">
            <span className="icon mb-2">
              <Palette />
            </span>
            <h2 className="text-lg font-semibold mb-2">Creative Development</h2>
            <p>
              From concept creation to scriptwriting, storyboarding, casting,
              and location scouting—we handle all the groundwork.
            </p>
          </div>

          <div className="w-[300px] bg-red-500 text-white p-6 rounded-lg shadow-md">
            <span className="icon mb-2">
              <Video />
            </span>
            <h2 className="text-lg font-semibold mb-2">Production</h2>
            <p>
              Our team produces premium content through expert filming,
              photography, lighting, and sound—plus live streaming and virtual
              events.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="w-[300px] bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <span className="text-lg font-semibold mb-2">
              <BriefcaseBusiness />
            </span>
            <h2 className="icon mb-2">Post-Production</h2>
            <p>
              We polish your content with professional editing, motion graphics,
              sound design, and color grading—delivering a final product that
              stands out.
            </p>
          </div>

          <div className="w-[300px] bg-green-500 text-white p-6 rounded-lg shadow-md">
            <span className="icon mb-2">
              <Palette />
            </span>
            <h2 className="text-lg font-semibold mb-2">
              Distribution & Marketing
            </h2>
            <p>
              We optimize and publish your content across platforms (YouTube,
              Instagram, LinkedIn, Signature App, and more), supported by
              performance tracking and reporting.
            </p>
          </div>
        </div>
      </div>
      {/* end of what we do */}
      <div className="content">
        <h2> Types of Content We Produce</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
            <span className="icon mb-2">
              <Palette />
              <h3 className="text-lg font-semibold mb-2">Videos</h3>
            </span>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
            Written
            <h3 className="text-lg font-semibold mb-2">Audio</h3>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Written</h3>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Visuals</h3>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">
              Live & Virtual Events
            </h3>
          </div>
        </div>
      </div>
      {/* end of types of content we produce */}
      <div className="content">
        <h2>Who We Work With</h2>
        We serve a wide range of industries, including: Corporate & B2B |
        E-commerce & Retail | Entertainment & Media | Education & Nonprofits |
        Healthcare & Pharmaceuticals
      </div>
      <div className="content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
            Column 1
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-6 text-center">
            <h2> Why Choose Signature?</h2>
            We serve a wide range of industries, including: Corporate & B2B |
            E-commerce & Retail | Entertainment & Media | Education & Nonprofits
            | Healthcare & Pharmaceuticals Ready to create content that makes an
            impact? [Let’s Talk – Start Your Project]
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
