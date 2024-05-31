import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Let's Eat SF",
  description: "A collection of San Francisco food truck information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-gradient-to-b from-cyan-100 to-orange-100" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
