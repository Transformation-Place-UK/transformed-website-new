import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <div className="flex flex-col h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start flex-grow">
        <Navbar />
        <div className="flex flex-col gap-8 max-w-full ml-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
            Welcome to Transformation Place
          </h1>
          <p className="text-lg sm:text-xl sm:text-left">
            At Transformation Place, we are dedicated to transforming lives through the Love and Power of God.
          </p>
        </div>
          </main>
      <Footer />
    </div>
  </div>
  );
}
