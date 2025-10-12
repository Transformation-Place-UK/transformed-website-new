import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display, Source_Code_Pro, Montserrat } from "next/font/google";
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transformation Place",
  description: "Transforming lives through the Love and Power of God",
};

export const founder = {
  name: "Valentine Nwaokolo",
  title: "Founder & Lead Pastor",
  imageUrl: "",
  email: "valo1y2k@yahoo.com",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans3.variable} ${playfairDisplay.variable} ${sourceCodePro.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
