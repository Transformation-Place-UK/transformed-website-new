import React from "react";
/* import Image from "next/image"; */

const Footer = () => {
  return (
    <footer className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-foreground shadow-md text-[#f4f4f4] font-sans  dark:text-[#ffffff]">
      <p>
        &copy; {new Date().getFullYear()} Transformation Place. All rights
        reserved.
        <a href="mailto:contact@transformationplace.org.uk">Contact Us</a>
        {/*
        <a href="https://facebook.com/TransformationPlaceUk">
          <Image src="/public/brand/facebook.svg" alt="Facebook Page" width={40} height={40}/> I'm trying to figure out how to make the svg icon appear here
        </a>
        */}
      </p>
    </footer>
  );
};

export default Footer;
