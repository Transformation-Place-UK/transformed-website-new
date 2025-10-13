import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-foreground shadow-md text-[#f4f4f4]">
      <div className="text-xl font-bold">
        <Link href="/" className="font-alt">TRANSFORMATION PLACE</Link>
        </div>
        <div className="space-x-4 font-sans">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/our-mission" className="hover:underline">Our Mission</Link>
            <Link href="/events" className="hover:underline">Events</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
    </nav>
  );
}

export default Navbar;
