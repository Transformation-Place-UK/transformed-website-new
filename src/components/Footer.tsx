import React from "react";
import Facebook from "./icons/Facebook";
import YouTube from "./icons/YouTube";
import { church } from "@/app/layout";

const Footer = () => {
  return (
    <footer className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-foreground shadow-md text-[#f4f4f4] font-sans dark:text-[#ffffff] rounded-t-md">
      <p>
        &copy; {new Date().getFullYear()} Transformation Place. All rights
        reserved.
        <a href={`mailto:${church.email}`}> Email Us</a>
        <a href={`https://youtube.com/${church.youtube}`}>
          <YouTube
            width={25}
            height={25}
            className="fill-[#f4f4f4] hover:opacity-70 inline-block ml-4"
          />
        </a>
        <a href={`https://facebook.com/${church.facebook}`}>
          <Facebook
            width={25}
            height={25}
            className="fill-[#f4f4f4] hover:opacity-70 inline-block ml-4"
          />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
