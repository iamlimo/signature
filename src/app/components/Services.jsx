"use client";

import React from "react";
import { MoveUpRight } from "lucide-react";

const Services = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className=" rounded-xl p-6 shadow">
          {" "}
          <div className="flex justify-center items-center gap-6 p-4">
            <div className="service-number px-6 py-4 rounded-xl shadow">
              <span>01</span>
            </div>
            <div className="service-title px-6 py-4 rounded-xl shadow">
              <span>Content Production</span>
            </div>
            <div className="service-icon px-6 py-4 rounded-xl shadow">
              <span>
                <MoveUpRight />
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl p-6 shadow">
          {" "}
          <div className="flex justify-center items-center gap-6 p-4">
            <div className="service-number px-6 py-4 shadow">
              <span>02</span>
            </div>
            <div className="service-title px-6 py-4 shadow">
              <span>Creative Direction</span>
            </div>
            <div className="service-icon px-6 py-4 shadow">
              <span>
                <MoveUpRight />
              </span>
            </div>
          </div>
        </div>
        <div className=" rounded-xl p-6 shadow">
          {" "}
          <div className="flex justify-center items-center gap-6 p-4">
            <div className="service-number px-6 py-4 rounded-xl shadow">
              <span>03</span>
            </div>
            <div className="service-title px-6 py-4 rounded-xl shadow">
              <span>Film Production</span>
            </div>
            <div className="service-icon px-6 py-4 rounded-xl shadow">
              <span>
                <MoveUpRight />
              </span>
            </div>
          </div>
        </div>
        <div className=" rounded-xl p-6 shadow">
          {" "}
          <div className="flex justify-center items-center gap-6 p-4">
            <div className="service-number px-6 py-4  shadow">
              <span>04</span>
            </div>
            <div className="service-title px-6 py-4 shadow">
              <span>Music & Sound Production</span>
            </div>
            <div className="service-icon px-6 py-4  shadow">
              <span>
                <MoveUpRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
