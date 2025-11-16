import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { church } from "../layout";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <div className="font-sans flex flex-col h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start flex-grow">
        <Navbar />
        <div className="flex flex-col gap-8 max-w-full ml-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
            Contact
          </h1>
          <p className="text-lg sm:text-xl sm:text-left">
            You can reach us via email at{" "}
            <a href={`mailto:${church.email}`} className="hover:underline">
              {church.email}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
