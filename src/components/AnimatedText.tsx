"use client";
import React from "react";
import { animated, useSpring } from "@react-spring/web";

export const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
  }));
  React.useEffect(() => {
    api.start({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { tension: 200, friction: 20 },
    });
  }, [api]);
  return (
    <animated.p style={springs} className="text-lg sm:text-xl sm:text-left">
      {text}
    </animated.p>
  );
};
