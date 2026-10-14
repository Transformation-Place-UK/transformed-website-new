import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className="font-sans flex flex-col h-screen">
        <main className="flex flex-col gap-8 row-start-2 sm:items-start grow">
          <Navbar />
          <div className="flex flex-col gap-8 max-w-full ml-8">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif sm:text-left">
              Transformation Place
            </h1>
          </div>
        </main>
        <Footer />
      </div>
  );
}
