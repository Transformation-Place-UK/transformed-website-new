import React from "react";
import Facebook from "./icons/Facebook";
import YouTube from "./icons/YouTube";
import { church } from "@/app/layout";

const Footer = () => {
  return (
    <footer className="w-full py-4 px-8 flex items-center justify-between bg-[#ffffff] dark:bg-background shadow-md text-foreground font-sans dark:text-foreground outline-1 outline-[#808080] rounded-t-md z-10 flex-col lg:flex-row space-y-2 lg:space-y-0">
      <p>
        &copy; {new Date().getFullYear()} Transformation Place. All rights
        reserved.
        <a href={`mailto:${church.email}`}> Email Us</a>
        <a href={`https://youtube.com/${church.youtube}`}>
          <YouTube
            width={25}
            height={25}
            className="fill-foreground transition-colors duration-200 hover:opacity-70 inline-block ml-4"
          />
        </a>
        <a href={`https://facebook.com/${church.facebook}`}>
          <Facebook
            width={25}
            height={25}
            className="fill-foreground transition-colors duration-200 hover:opacity-70 inline-block ml-4 "
          />
        </a>
      </p>
      <p className="text-[12px]">
        Registered Charity No. {church.charityNumber}
      </p>
    </footer>
  );
};

export default Footer;
