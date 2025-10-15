'use client';

import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";



const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
  setIsOpen(!isOpen);
};

  return (
    <nav className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-foreground shadow-md text-[#f4f4f4] dark:text-[#333]">
      <div className="text-xl font-bold">
        <Link href="/" className="font-alt hover:no-underline">TRANSFORMATION PLACE</Link>
        </div>

        <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none hover:text-gray-300">
                {isOpen ? <X size={24}/> : <Menu size={24} />}
            </button>
        </div>
        <div className="hidden lg:transition-none lg:flex space-x-4 font-sans hover:no-underline">
            <Link href="/about">About</Link>
            <Link href="/our-mission">Our Mission</Link>
            <Link href="/events">Events</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
        </div>
        {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-foreground dark:bg-foreground shadow-md flex flex-col items-left lg:hidden z-10 space-y-4 py-4 px-8 font-sans animate-fade-down animate-once animate-normal">
            <Link href="/about">About</Link>
            <Link href="/our-mission">Our Mission</Link>
            <Link href="/events">Events</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            </div>
        )}
    </nav>
  );
}


export default Navbar;
