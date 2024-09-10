import Head from "next/head";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Cairo } from "next/font/google";

export const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
});
export const metadata: Metadata = {
  title: "مفازا - الصفحة الرئيسية",
  description:
    "موقع مفازا - منصة لحجب المواقع الإباحية، توفير محتوى إسلامي للأطفال، توفير فرص عمل و تسهيل العمل للشباب، و توفير مواد علمية بجودة عالية تنافس الغرب",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className={cairo.variable}>
      <body className={cairo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
