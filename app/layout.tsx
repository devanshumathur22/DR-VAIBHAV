"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CTASection from "@/components/sections/CTASection";
import Loader from "@/components/ui/Loader";
import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 🔥 UPDATED TIME (2.5 sec)

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading && <Loader />}

        <Navbar />

        {children}

        <CTASection />

        <Footer />
      </body>
    </html>
  );
}