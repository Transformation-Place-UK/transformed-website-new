"use client";

import Link from "next/link";
import React from "react";
import Hamburger from "./icons/Hamburger";
import ExitMenu from "./icons/ExitMenu";
import { animated, useSpring } from "@react-spring/web";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const TransformedNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [springs, api] = useSpring(() => ({
    from: { y: -100, opacity: 0 },
  }));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    api.start({
      from: {
        y: -100,
        opacity: 0,
      },
      to: {
        y: 0,
        opacity: 1,
      },
      config: { friction: 30, tension: 200 },
    });
  };

  const menus = [
    { title: "About", path: "/events/transformed/about" },
    { title: "Our Plan", path: "/events/transformed/our-plan" },
    { title: "Book", path: "/events/transformed/book" },
    { title: "Contact", path: "/events/transformed/contact" },
    { title: "Back to events page", path: "/events" },
  ];

  return (
    <nav className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-background shadow-md text-[#f4f4f4] dark:text-foreground dark:outline-2 outline-[#808080] sticky top-0 z-20">
      <div className="text-xl font-bold">
        <Link href="/events/transformed" className="font-alt hover:no-underline">
          Transformed
        </Link>
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none hover:text-gray-300"
        >
          {isOpen ? <ExitMenu width={24} /> : <Hamburger width={24} />}
        </button>
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
        <animated.ul
          style={{ ...springs }}
          className="absolute top-16 left-0 w-full bg-foreground dark:bg-foreground shadow-md flex flex-col items-left lg:hidden z-10 space-y-4 py-4 px-8 font-sans rounded-b-md"
        >
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
        </animated.ul>
      )}
    </nav>
  );
};

export default TransformedNavbar;
