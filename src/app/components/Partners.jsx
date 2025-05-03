import React from "react";

const logos = ["./empire.png", "./urbanspacer.png"];

const Partners = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-center mb-8">Our Partners</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-64 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
