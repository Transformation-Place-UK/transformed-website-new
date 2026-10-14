import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { church } from "../layout";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <div className="font-sans flex flex-col h-screen">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start grow">
        <Navbar />
        <div className="flex flex-col gap-8 max-w-full ml-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
            Services
          </h1>
          <p className="text-lg sm:text-xl sm:text-left">
            Starting November 4th, 2026, all services will be open to the public.
          </p>
          <p className="text-lg sm:text-xl sm:text-left">
            All services are open to the public regardless of background, and
            are designed to improve spiritual, emotional, and social outcomes.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif sm:text-left">
            Weekly Services
          </h2>
          <ul className="list-disc list-inside text-lg sm:text-xl sm:text-left">
            <li>Sunday Service: 10:00 AM - 11:30 PM</li>
            <li>Wednesday Bible Study: 6:30 PM - 7:30 PM</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
