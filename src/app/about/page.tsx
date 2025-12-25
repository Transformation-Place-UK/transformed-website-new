import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { founder } from "../layout";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <div className="font-sans flex flex-col h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start flex-grow">
        <Navbar />
        <div className="flex flex-col gap-8 max-w-full ml-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
            About Us
          </h1>
          <p className="text-lg sm:text-xl sm:text-left">
            While Transformation Place has only been here for a year, we've been doing the church business way before then.
            We're a church situated in London, aiming to educate the youth on
            the power and love of God. We were founded by {founder.name} in 2018
            as Church of His Presence, East London, and services were held in
            Park Hotel, Ilford. Despite the name, we were not affliated to{" "}
            <a
              href="https://www.churchofhispresence.org.uk"
              className="transition hover:underline"
            >
              Church of His Presence UK.
            </a>
          </p>
          <p className="text-lg sm:text-xl sm:text-left">
            Services took place every Sunday from 10am to 11:30am, at Park Hotel
            in Ilford, until we moved to Forest Gate Community School in 2024.
          </p>
          <p className="text-lg sm:text-xl sm:text-left">
            At the beginning of 2025, we rebraneded to Transformation Place and
            moved out of Forest Gate.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
