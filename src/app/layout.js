"use client";

import localFont from "next/font/local";
// import "./globals.css";
import "../styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import StoreProvider from "@/redux/StoreProvider";
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    // Import Bootstrap JS only on the client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <Head>
        {/* Set the project title globally */}
        <title>Mera Project</title> {/* This will set the title as Mera Project */}
        <link rel="icon" href="/favicon.ico" /> {/* Ensure favicon is in the public folder */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
