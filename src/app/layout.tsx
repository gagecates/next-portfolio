import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import SnowFall from "@/components/SnowFall";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gages Cates",
  description: "Doing things with my keyboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-10 h-full flex justify-center">
          <SnowFall />
          <div className="bg-black max-w-screen-2xl h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
