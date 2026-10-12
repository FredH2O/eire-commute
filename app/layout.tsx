import type { Metadata } from "next";
import { Silkscreen } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Eire Commute",
  description: "A simple way to check public transport times across Ireland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${silkscreen.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col max-w-4xl mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
