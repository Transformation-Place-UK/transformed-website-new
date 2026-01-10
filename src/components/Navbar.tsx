"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import React from "react";
import Hamburger from "./icons/Hamburger";
import ExitMenu from "./icons/ExitMenu";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menus = [
    { title: "About", path: "/about" },
    { title: "Our Mission", path: "/our-mission" },
    { title: "Events", path: "/events" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-background shadow-md text-[#f4f4f4] dark:text-foreground dark:outline-2 outline-[#808080] sticky top-0 z-20">
      <div className="text-xl font-bold">
        <Link href="/" className="font-alt hover:no-underline">
          TRANSFORMATION PLACE
        </Link>
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none hover:text-gray-300 cursor-pointer"
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
        <motion.ul
          initial={{ y: -10, opacity: 0, scale: 0.95 }}
          animate={{ y: -1, opacity: 1, scale: 1 }}
          transition={{ type: "keyframes", duration: 0.2, stiffness: 0 }}
          className="absolute top-16 left-0 w-full h-screen bg-foreground/90 dark:bg-background/90 shadow-md flex flex-col items-left lg:hidden z-10 space-y-4 py-4 px-8 font-sans rounded-b-md"
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
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
