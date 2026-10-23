import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer bg-[#000000] text-white">
      <div className="flex items-center justify-between p-4">
        <div className="float-left">
          <Image
            src="/spn-logo.png"
            alt="Signature Pictures Network logo"
            className="rounded-xl shadow"
            width={100}
            height={100}
          />
        </div>
        <div className="float-right text-[#7a7979]">
          copyright &copy; 2025 Signature Pictures Network. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
