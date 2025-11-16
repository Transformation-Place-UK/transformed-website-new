"use client";
import React from "react";
import { animated, useSpring } from "@react-spring/web";

export const TransformedAnimatedHeader: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
  }));
  React.useEffect(() => {
    api.start({
      from: { opacity: 0, transform: "translateY(-20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { tension: 200, friction: 20 },
    });
  }, [api]);
  return (
    <animated.div
      style={springs}
      className="flex flex-col gap-4 max-w-full mb-8"
    >
      <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
        {title}
      </h1>
      <p className="text-lg sm:text-xl sm:text-left">{subtitle}</p>
    </animated.div>
  );
};
