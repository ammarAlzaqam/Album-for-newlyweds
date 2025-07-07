import "./globals.css";
import type { Metadata } from "next";
import AOSProvider from "@/utils/AOSProvider";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"], // اختار الأوزان اللي محتاجها
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed&Fairuz",
  description: "Album for the newlyweds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>
        <AOSProvider /> {/* ✅ AOS works here */}
        {children}
      </body>
    </html>
  );
}
