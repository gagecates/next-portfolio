import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gages Awesome Next.js Portfolio",
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
        <div className="px-10 h-full flex items-center justify-center">
          <div className="bg-black max-w-screen-2xl	 min-w-96	 h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
