import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-foreground shadow-md text-[#f4f4f4]">
        <p>&copy; {new Date().getFullYear()} Transformation Place. All rights reserved. <a href="mailto:contact@transformationplace.org.uk">Contact Us</a></p>
    </footer>
  );
}

export default Footer;
