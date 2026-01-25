"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import React from "react";
import TransformedLogo from "./TransformedLogo";
import { MotionConfig } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menus = [
    { title: "About", path: "/about" },
    { title: "Our Mission", path: "/our-mission" },
    { title: "Events", path: "/events" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  const Hamburger = () => {
    return (
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={isOpen ? "open" : "closed"}
          onClick={() => setIsOpen((pv) => !pv)}
          className="relative h-5 w-5 transition-colors"
        >
          <motion.span
            variants={VARIANTS.top}
            className="absolute h-0.5 w-5 bg-foreground"
            style={{ y: "-50%", left: "50%", x: "-50%", top: "15%" }}
          />
          <motion.span
            variants={VARIANTS.middle}
            className="absolute h-0.5 w-5 bg-foreground"
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
          />
          <motion.span
            variants={VARIANTS.bottom}
            className="absolute h-0.5 w-5 bg-foreground"
            style={{
              x: "-50%",
              y: "50%",
              bottom: "15%",
              left: "50%",
            }}
          />
        </motion.button>
      </MotionConfig>
    );
  };

  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["15%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "15%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["15%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "15%"],
        left: "50%",
      },
    },
  };

  return (
    <nav className="w-full py-4 px-8 flex items-center justify-between bg-[#ffffff] dark:bg-background text-foreground dark:text-foreground outline-1 outline-[#808080] sticky top-0 z-20">
      <div className="text-xl font-bold">
        <Link
          href="/"
          className="font-alt hover:no-underline flex text-[rgb(237,47,38)] dark:text-foreground"
        >
          <TransformedLogo width={30} height={30} className="mr-2" />{" "}
          TRANSFORMATION PLACE
        </Link>
      </div>

      <div className="lg:hidden">
        <Hamburger />
      </div>
      <ul className="hidden lg:transition-none lg:flex space-x-6 font-sans">
        {menus.map((item, idx) => (
          <li key={idx} className="list-none">
            <Link
              href={item.path}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      {isOpen && (
        <motion.ul
          initial={{ y: -10, opacity: 0, scale: 0.95 }}
          animate={{ y: -1, opacity: 1, scale: 1 }}
          transition={{ type: "keyframes", duration: 0.2, stiffness: 0 }}
          className="absolute top-16 left-0 w-full h-screen bg-[#ffffff]/90 dark:bg-background/90 shadow-md flex flex-col items-left lg:hidden z-10 space-y-4 py-4 px-8 font-sans rounded-b-md"
        >
          {menus.map((item, idx) => (
            <li key={idx} className="list-none">
              <Link
                href={item.path}
                className="hover:text-gray-500 transition-colors duration-200"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
