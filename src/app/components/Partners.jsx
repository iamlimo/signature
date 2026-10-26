import React from "react";
import Image from "next/image";

const logos = [
  { src: "/empire.png", alt: "Empire partner" },
  { src: "/urbanspacer.png", alt: "Urban Spacer partner" },
  { src: "/signature_pictures_jrandle.png", alt: "Signature Pictures Jrandle partner" },
];

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
            <Image
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={120}
              className="h-64 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
