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
            All services are open to the public regardless of background, and
            are designed to improve spiritual, emotional, and social outcomes.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif sm:text-left">
            Weekly Services
          </h2>
          <p className="text-lg sm:text-xl sm:text-left">
            Our services are held at upCYCLE LDN, Unit 1 & 2, Fairfax House,
            Overton Rd, London SW9 7JR.
          </p>
          <ul className="list-disc list-inside text-lg sm:text-xl sm:text-left">
            <li>Sunday Service: 10:00 AM - 11:30 PM</li>
            <li>Wednesday Bible Study: 6:30 PM - 7:30 PM</li>
          </ul>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.4455153123627!2d-0.11293901537011844!3d51.46833616992349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605a566f95727%3A0xfe520ea9f52e5a93!2supCYCLE%20LDN!5e0!3m2!1sen!2suk!4v1795344315562!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="mb-8"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}
