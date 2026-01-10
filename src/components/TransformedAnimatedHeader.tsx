"use client";
import * as motion from "motion/react-client";
import React from "react";
import { animated, useSpring } from "@react-spring/web";

export const TransformedAnimatedHeader: React.FC<{
  title: string;
  subtitle: string;
  }> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ x: 1000, opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "keyframes", duration: 0.5, stiffness: 0 }}
      className="flex flex-col gap-4 max-w-full mb-8"
    >
      <h1 className="text-4xl sm:text-5xl font-bold font-alt text-center">
        {title}
      </h1>
      <p className="text-lg sm:text-xl sm:text-left">{subtitle}</p>
    </motion.div>
  );
};
