import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
};

export default function Events() {
  return (
    <div className="font-sans flex flex-col h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start flex-grow">
        <Navbar />
        <div className="flex flex-col gap-8 max-w-full ml-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
            Events
          </h1>
          <p className="text-lg sm:text-xl sm:text-left">
            Every year, we have a youth event called "Transformed". We are
            planning to make it public and last for mutilple days in the future.
            <br />
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
