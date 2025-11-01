import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { church } from "../layout";

export const metadata: Metadata = {
  title: "Services - Transformation Place",
};

export default function Services() {
  return (
    <div className="font-sans flex flex-col h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start flex-grow">
        <Navbar />
        <div className="flex flex-col gap-8 max-w-full ml-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
            Services
          </h1>
          <p className="text-lg sm:text-xl sm:text-left">
            Due to ongoing updates, we are currently not having services for the
            public.
          </p>
          <p className="text-lg sm:text-xl sm:text-left">
            To get updated regularly check out our{" "}
            <a href={`youtube.com/${church.youtube}`}>YouTube</a> and{" "}
            <a href={`facebook.com/${church.facebook}`}>Facebook</a> accounts.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
