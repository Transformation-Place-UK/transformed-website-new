import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-foreground shadow-md text-[#f4f4f4] font-sans dark:text-[#ffffff]">
      <p>
        &copy; {new Date().getFullYear()} Transformation Place. All rights
        reserved.
        <a href="mailto:contact@transformationplace.org.uk"> Contact Us</a>
        <a href="https://youtube.com/@TransformationPlaceUK">
          <svg
            width="25"
            height="25"
            className="fill-[#f4f4f4] hover:opacity-70 inline-block ml-4"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>YouTube</title>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
        <a href="https://facebook.com/TransformationPlaceUk">
          <svg
            width="25"
            height="25"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-[#f4f4f4] hover:opacity-70 inline-block ml-4"
          >
            <title>Facebook</title>
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
          </svg>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
