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
      <main className="flex flex-col gap-8 row-start-2 sm:items-start grow">
        <Navbar />
        <div className="flex flex-col gap-8 max-w-full ml-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
            Contact
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold sm:text-left">
            Valentine Nwaokolo - Charity Lead
          </h2>
          <p className="text-lg sm:text-xl sm:text-left">
            Email: <a href={`mailto:${church.email}`}>{church.email}</a>
          </p>
          <p className="text-lg sm:text-xl sm:text-left">
            Phone: <a href={`tel:${church.phone}`}>{church.phone}</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
