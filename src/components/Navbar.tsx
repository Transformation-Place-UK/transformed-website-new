import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-foreground shadow-md text-[#f4f4f4]">
      <div className="text-xl font-bold">
        <Link href="/" className="font-alt hover:no-underline">TRANSFORMATION PLACE</Link>
        </div>
        <div className="space-x-4 font-sans hover:no-underline">
            <Link href="/about">About</Link>
            <Link href="/our-mission">Our Mission</Link>
            <Link href="/events">Events</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
        </div>
    </nav>
  );
}

export default Navbar;
