"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import PrelineScript from "../components/common/PrelineScript.tsx";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Inventory Application",
  description: "Buissness tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar height="4px" />
        {/* <Navbar /> */}
        {children}

        <PrelineScript />
      </body>
    </html>
  );
}
