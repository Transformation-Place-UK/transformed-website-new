import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { founder } from "../layout";

export default function Home() {
  return (
    <div className="font-sans">
        <div className="flex flex-col h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start flex-grow">
        <Navbar />
        <div className="flex flex-col gap-8 max-w-full ml-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
            About Us
          </h1>
          <p className="text-lg sm:text-xl sm:text-left">
            We're a church situated in London, aiming to educate the youth on the power and love of God.
            We were founded by {founder.name} in 2018 as Church of His Presence, East London, and services were held in Park Hotel, Ilford.
            Despite the name, we are not related to <a href="https://www.churchofhispresence.org.uk">Church of His Presence UK.</a>
          </p>
        </div>
          </main>
            <Footer />
        </div>
    </div>
  );
}
