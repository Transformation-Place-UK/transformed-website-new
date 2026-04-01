import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission",
};

export default function OurMission() {
  return (
    <div className="font-sans flex flex-col h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start flex-grow">
        <Navbar />
        <div className="flex flex-col gap-8 max-w-full ml-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
            Our Mission
          </h1>
          <p className="text-lg sm:text-xl sm:text-left">
            We plan to advance the Christian faith through accessible worship,
            teaching, and outreach activities. It supports young people and the
            wider community by offering mentoring, educational support, and
            programmes that promote personal development, wellbeing, and moral
            values.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
