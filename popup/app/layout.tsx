"use client";

import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/contexts/providers";

const notoSans = Noto_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Túlkr",
  description: "Custom subtitles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
