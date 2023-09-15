import MobileNav from "@/components/layout/MobileNav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Work_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";

const playFair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goldie Portfolio",
  description: "a quick look of me!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playFair.className}>
        <Navbar></Navbar>
        <div className="max-w-5xl mx-auto mt-32">{children}</div>
      </body>
    </html>
  );
}
