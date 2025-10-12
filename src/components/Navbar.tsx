import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-foreground shadow-md">
      <div className="text-xl font-bold">
        <Link href="/" className="text-[#f4f4f4] font-alt">TRANSFORMATION PLACE</Link>
        </div>
        <div className="space-x-4">
            <Link href="/about" className="hover:underline text-[#f4f4f4]">About</Link>
            <Link href="/services" className="hover:underline text-[#f4f4f4]">Services</Link>
            <Link href="/contact" className="hover:underline text-[#f4f4f4]">Contact</Link>
        </div>
    </nav>
  );
}

export default Navbar;
