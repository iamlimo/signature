import React from "react";
import { motion } from "framer-motion";

const Ticker = ({ text, speed = 50 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full text-white">
      <motion.div
        className="inline-block"
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <span className="mx-4 text-lg">{text}</span>
        <span className="mx-4 text-lg">{text}</span>
        <span className="mx-4 text-lg">{text}</span>
        <span className="mx-4 text-lg">{text}</span>
      </motion.div>
    </div>
  );
};

export default Ticker;
