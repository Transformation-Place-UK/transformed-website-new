"use client";

import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";
import { animated, useSpring } from "@react-spring/web";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    api.start({
      from: {
        y: -100,
      },
      to: {
        y: 0,
      },
      config: { friction: 46 },
    });
  };

  const [springs, api] = useSpring(() => ({
    from: { y: -100 },
  }));

  const menus = [
    { title: "About", path: "/about" },
    { title: "Our Mission", path: "/our-mission" },
    { title: "Events", path: "/events" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-foreground shadow-md text-[#f4f4f4] dark:text-[#333] sticky top-0 z-20">
      <div className="text-xl font-bold">
        <Link href="/" className="font-alt hover:no-underline">
          TRANSFORMATION PLACE
        </Link>
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none hover:text-gray-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className="hidden lg:transition-none lg:flex space-x-4 font-sans hover:no-underline">
        {menus.map((item, idx) => (
          <li key={idx} className="list-none">
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </div>
      {isOpen && (
        <animated.div
          style={{ ...springs }}
          className="absolute top-16 left-0 w-full bg-foreground dark:bg-foreground shadow-md flex flex-col items-left lg:hidden z-10 space-y-4 py-4 px-8 font-sans"
        >
          {menus.map((item, idx) => (
            <li key={idx} className="list-none">
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </animated.div>
      )}
    </nav>
  );
};

export default Navbar;
