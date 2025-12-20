import TransformedNavbar from "@/components/TransformedNavbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { TransformedAnimatedHeader } from "@/components/TransformedAnimatedHeader";

export const metadata: Metadata = {
  title: "Transformed | Events",
};

export default function Events() {
  return (
    <div className="font-sans flex flex-col h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start flex-grow">
        <TransformedNavbar />
        <div className="flex flex-col gap-8 max-w-full ml-8">
          <TransformedAnimatedHeader title="Transformed" subtitle="Teaching the next generation on God's Word." />
          </div>
      </main>
      <Footer />
    </div>
  );
}
