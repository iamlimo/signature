import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-[#000000] text-white">
      <div className="flex items-center justify-between p-4">
        <div className="float-left">
          <img src="/spn-logo.png" className="rounded-xl shadow" width={100} />
        </div>
        <div className="float-right text-[#7a7979]">
          copyright &copy; 2025 Signature Pictures Network. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
